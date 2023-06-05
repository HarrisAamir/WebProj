import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleLogin = (e) => {
    
        axios.post('http://localhost:3001/admin/login', {
          "username":username,
          "password":password
        }).then(res=>{
            alert('Login successful');
            localStorage.setItem('token', res.data);
            console.log('Response:', res.data);
            navigate('/Admin');
        }).catch(err=>{
            alert("Invalid Credentails")
      })
    }
  return (
    <div>

    <div className="row align-items-center">
      <div className="col-sm">
      <img src="https://i.pinimg.com/originals/94/09/7e/94097e458fbb22184941be57aaab2c8f.png" width={"100%"}></img>

      </div>
      <div className="col-sm m-5">
        
      <h1>Login Admin</h1>
      <Form onSubmit={handleLogin}>
        <Form.Group controlId="formUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" onClick={handleLogin} className='mt-3'>
          Login 
        </Button>
      </Form>
            </div>
    </div>
  </div>

     
  );
};

export default Login;
