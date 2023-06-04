import React, { useState } from 'react';
import { useContext } from 'react';
import { editContext } from './Resturant';
import axios from 'axios';
const EditResturant = ({ restaurant }) => {
  const [formData, setFormData] = useState({
    restaurantName: restaurant.restaurantName,
    restaurantDescription: restaurant.restaurantDescription,
    restaurantUsername: restaurant.restaurantuserName,
    restaurantPassword: restaurant.restaurantPassword,
    restaurantType: restaurant.restaurantType,
    restaurantStatus: restaurant.restaurantStatus,
    restaurantLogo: restaurant.restaurantLogo,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const { edit, closeEdit } = useContext(editContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost/admin/editRestaurant",formData,{headers:{
        token:localStorage.getItem("token"),
        'Content-Type': 'application/json'
    }}).then(res=>{
        alert("Information Sucessfully editied")
    }).catch(err=>{
        alert("Error: "+err)
    })
    closeEdit()
  };
  const close=()=>{
    closeEdit()
  }
  return (
    <div>
      <h2>Edit Restaurant</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="restaurantName" className="form-label">Restaurant Name</label>
          <input type="text" className="form-control" id="restaurantName" name="restaurantName" value={formData.restaurantName} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="restaurantDescription" className="form-label">Restaurant Description</label>
          <input type="text" className="form-control" id="restaurantDescription" name="restaurantDescription" value={formData.restaurantDescription} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="restaurantUsername" className="form-label">Restaurant Username</label>
          <input type="text" className="form-control" id="restaurantUsername" name="restaurantUsername" value={formData.restaurantUsername} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="restaurantPassword" className="form-label">Restaurant Password</label>
          <input type="password" className="form-control" id="restaurantPassword" name="restaurantPassword" value={formData.restaurantPassword} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="restaurantType" className="form-label">Restaurant Type</label>
          <input type="text" className="form-control" id="restaurantType" name="restaurantType" value={formData.restaurantType} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="restaurantStatus" className="form-label">Restaurant Status</label>
          <input type="text" className="form-control" id="restaurantStatus" name="restaurantStatus" value={formData.restaurantStatus} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="restaurantLogo" className="form-label">Restaurant Logo</label>
          <input type="text" className="form-control" id="restaurantLogo" name="restaurantLogo" value={formData.restaurantLogo} onChange={handleChange} />
        </div>
        <button type="submit" className="btn btn-primary mx-2 mb-5">Save Changes</button>
        <button className="btn btn-danger mx-2 mb-5">Back</button>
      </form>
    </div>
  );
};

export default EditResturant;
