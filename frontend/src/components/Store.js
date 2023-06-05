import React, { useEffect, useState } from "react";
import axios from "axios";
import EditStore from "./EditStore";
import AddStore from "./AddStore";
const Store = () => {
  const [stores, setStores] = useState([]);
  const [del, setDel] = useState("");
  const [edit, setEdit] = useState({"val":false, "store":stores[0]});
  const [newStore, setNewStore]= useState(false)
  useEffect( () => {
    // Fetch restaurant data from the backend API
     axios.get('http://localhost:3001/admin/viewAllStores')
      .then(async (response) => {
         setStores(response.data)
      })
      .catch(error => {
        alert("Error when fetching data")
        console.log('Error fetching restaurants:', error);
      });
  }, [edit,del,newStore]);

  console.log(stores)
  const deleteHandler = async (Store) => {
    const id=Store._id
    console.log(id)
    axios.delete(`http://localhost:3001/admin/deleteStore/${id}`, {
        headers: {
          token: localStorage.getItem("token"),
          'Content-Type': 'application/json',
        }
    }).then(res=>{
        alert("Deleted "+res.data.grocerystoreName)
        setDel("true")
    }).catch(err=>{
        alert("Error:"+err)
    })
  };

  const closeEdit=()=>{
    setEdit({"val":false, "store":Store })  
  }
  

  return (    
    <div className="container text-center">

    {newStore===true?<AddStore close={setNewStore}/>:<></>}
    {edit.val===true?<EditStore store={edit.store} onClose={closeEdit}/>:<></> }
    
    <h1 className="my-3">Store List</h1>
      <button className='btn btn-success' onClick={()=>{setNewStore(true)}}>Add New Store</button>
      <div className="row">
        {stores.map((store) => {
          return (
            <div className="col-md-4 p-3 mt-2" key={store._id}>
             {
                <div className='bg-light p-3 text-center'>
                <h3>{store.grocerystoreName}</h3>
                <img src={store.grocerystoreLogo} className="img-fluid" style={{ height: '200px', width: '200px' }} alt="ioeur"/>
                <p>{store.grocerystoreStatus}</p>
                <button className='btn btn-info' onClick={()=>{setEdit({"val":true, "store":store })   }}> Edit </button>
                <button className=' m-2 btn btn-danger' onClick={()=>{deleteHandler(store)}}> Delete </button>
                </div>
             }
        </div>
          )
        })} 
       </div>
    </div>
  )    
}
export default Store