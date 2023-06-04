import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import axios from 'axios';
import EditResturant from './EditResturant';
export const editContext = createContext();

const Restaurant = (props) => {
  const [restaurants, setRestaurants] = useState([]);
  const [del, setDel] = useState("");
  const [edit, setEdit] = useState({"val":false, "resturant":restaurants[0]});
  const deleteHandler= (resturant)=>{
    const id=resturant._id
    console.log(id)
    axios.delete(`http://localhost:3001/admin/deleteRestaurant/${id}`, {
        headers: {
          token: localStorage.getItem("token"),
          'Content-Type': 'application/json',
        }
    }).then(res=>{
        alert("Deleted "+res.data.restaurantName)
        setDel("true")
    }).catch(err=>{
        alert("Error:"+err)
    })
  }
  useEffect( () => {
    // Fetch restaurant data from the backend API
     axios.get('http://localhost:3001/admin/getAllRestaurants')
      .then(async (response) => {
         setRestaurants(response.data)
      })
      .catch(error => {
        console.log('Error fetching restaurants:', error);
      });
  }, [del,edit]);

  const closeEdit=()=>{
    setEdit({"val":false , "resturant":""})
  }
  return (
    <editContext.Provider value={{edit,closeEdit}}>
    <div className="container text-center">
    
    {edit.val===true?<EditResturant restaurant={edit.resturant}/>:<>
    

    <h1 className="my-3">Restaurant List</h1>
      <button className='btn btn-success'>Add New Resturant</button>
      <div className="row">
        {restaurants.map((resturant) => {
          return (
            <div className="col-md-4 p-3 mt-2" key={resturant._id}>
             {
                <div className='bg-light p-3 text-center'>
                <h3>{resturant.restaurantName}</h3>
                <img src={resturant.restaurantLogo} className="img-fluid" style={{ height: '200px', width: '200px' }} alt="ioeur"/>
                <p>{resturant.restaurantDescription}</p>
                <p>{resturant.restaurantType}</p>
                <button className='btn btn-primary' onClick={()=>{setEdit({
                    "val":true,
                    "resturant":resturant
                })}}> Edit </button>
                <button className=' m-2 btn btn-danger' onClick={()=>{deleteHandler(resturant)}}> Delete </button>
                </div>
             }
            </div>
          );
        })}
      </div>
      </>} 
     </div> 
     </editContext.Provider>  
  );
};

export default Restaurant;
