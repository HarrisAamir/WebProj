import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
const ChatComponent= (props) => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('Hello');

//   const handleInputChange = async (e) => {
//     const response =  await fetch("https://api-inference.huggingface.co/models/gpt2",
//     {
//         headers: { Authorization: `Bearer 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` },
//         method: "POST",
//         body: JSON.stringify(inputText),
//     }
// );
// const result = await response.json();
// await console.log(result)
// await setMessages(result[0].generated_text)
//     // setInputText(e.target.value);
//   };


  async function query(data) {
    const response = await fetch(
      "https://api-inference.huggingface.co/models/microsoft/DialoGPT-medium",
      {
        headers: { Authorization: "Bearer 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" },
        method: "POST",
        body: JSON.stringify(data),
      }
    );
    const result = await response.json();
    return result;
  }
  const handleInputChange =()=>{
  query({"inputs": {
      "past_user_inputs": [""],
      "generated_responses": [""],
      "text": inputText
    }}).then((response) => {
    const result=JSON.stringify(response);
    console.log(response.generated_text)
    setMessages(response.generated_text)

  });
}

  return (
    <div>
      {/* <div className="message-container">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender}`}>
            {message.text}
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          value={inputText}
          placeholder="Type your message..."
        />
        <button onClick={handleSendMessage}>Send</button>
      </div> */}
      <Card style={{ width: '600px' , margin:"auto", "margin-top":"90px"}} className='rounded'>
      <Card.Body>
        <Card.Title><h2>Chat with DialogGPT:</h2></Card.Title>
        <Card.Text>
        <p style={{ fontSize: '23px' }}>{messages}</p>
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <Form.Group controlId="formInput">
          <Form.Control type="text" placeholder="Enter something" onChange={(event)=>{setInputText(event.target.value)}}/>
        </Form.Group>
        <div>
        <center>
        <Button variant="info" className="mt-2 align-center" onClick={()=>{handleInputChange()}} >Submit</Button>
        </center>
        </div>
      </Card.Footer>
       
       </Card>
      
    </div>
  );
};

export default ChatComponent;