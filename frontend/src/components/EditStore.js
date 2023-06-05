import React, { useState, useContext } from 'react';
import axios from 'axios';
import { editContext } from './Resturant';

const EditStore = ({ store,onClose }) => {
  const [formData, setFormData] = useState({
    _id: store._id,
    grocerystoreName: store.grocerystoreName,
    grocerystorePassword: store.grocerystorePassword,
    grocerystoreStatus: store.grocerystoreStatus,
    grocerystoreuserName: store.grocerystoreuserName,
    grocerystoreLogo: store.grocerystoreLogo,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
 const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "http://localhost:3001/admin/editStore",
        formData,
        {
          headers: {
            token: localStorage.getItem("token"),
            'Content-Type': 'application/json'
          },
        }
      );

      alert("Information successfully edited");
     
    } catch (err) {
      console.error(err);
      
      alert("Error: " + err.message);
    }
    close();
  };

  const close = () => {
    onClose()
  };

  return (
    <div>
      <h2>Edit Store</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="grocerystoreName" className="form-label">Grocery Store Name</label>
          <input type="text" className="form-control" id="grocerystoreName" name="grocerystoreName" value={formData.grocerystoreName} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="grocerystorePassword" className="form-label">Grocery Store Password</label>
          <input type="password" className="form-control" id="grocerystorePassword" name="grocerystorePassword" value={formData.grocerystorePassword} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="grocerystoreStatus" className="form-label">Grocery Store Status</label>
          <input type="text" className="form-control" id="grocerystoreStatus" name="grocerystoreStatus" value={formData.grocerystoreStatus} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="grocerystoreuserName" className="form-label">Grocery Store Username</label>
          <input type="text" className="form-control" id="grocerystoreuserName" name="grocerystoreuserName" value={formData.grocerystoreuserName} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="grocerystoreLogo" className="form-label">Grocery Store Logo</label>
          <input type="text" className="form-control" id="grocerystoreLogo" name="grocerystoreLogo" value={formData.grocerystoreLogo} onChange={handleChange} />
        </div>
        <button type="submit" className="btn btn-info mx-2 mb-5" onClick={handleSubmit}>Save Changes</button>
        <button className="btn btn-danger mx-2 mb-5" onClick={close}>Close</button>
      </form>
    </div>
  );
};

export default EditStore;
