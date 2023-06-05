import React, { useState } from "react";
import axios from "axios";
const AddResturant = ({ close }) => {
  const [formData, setFormData] = useState({
    restaurantName: "",
    restaurantDescription: "",
    restaurantuserName: "",
    restaurantPassword: "",
    restaurantType: "",
    restaurantStatus: "",
    restaurantLogo: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    axios
      .post("http://localhost:3001/admin/addNewResturant", formData, {
        headers: {
          token: localStorage.getItem("token"),
          "Content-Type": "application/json",
        },
      })
      .then(async (res) => {
        alert("Sucessfully added");
        await close();
      })
      .catch(async (err) => {
        await alert("Error: " + err);
      });
  };
  const closeForm = () => {
    close();
  };
  return (
    <div>
      <h2>Add new Restaurant</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="restaurantName" className="form-label">
            Restaurant Name
          </label>
          <input
            type="text"
            className="form-control"
            id="restaurantName"
            name="restaurantName"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="restaurantDescription" className="form-label">
            Restaurant Description
          </label>
          <input
            type="text"
            className="form-control"
            id="restaurantDescription"
            name="restaurantDescription"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="restaurantuserName" className="form-label">
            Restaurant Username
          </label>
          <input
            type="text"
            className="form-control"
            id="restaurantuserName"
            name="restaurantuserName"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="restaurantPassword" className="form-label">
            Restaurant Password
          </label>
          <input
            type="password"
            className="form-control"
            id="restaurantPassword"
            name="restaurantPassword"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="restaurantType" className="form-label">
            Restaurant Type
          </label>
          <input
            type="text"
            className="form-control"
            id="restaurantType"
            name="restaurantType"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="restaurantStatus" className="form-label">
            Restaurant Status
          </label>
          <input
            type="text"
            className="form-control"
            id="restaurantStatus"
            name="restaurantStatus"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="restaurantLogo" className="form-label">
            Restaurant Logo
          </label>
          <input
            type="text"
            className="form-control"
            id="restaurantLogo"
            name="restaurantLogo"
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="btn btn-info mx-2 mb-5"
          onClick={handleSubmit}
        >
          Add New
        </button>
        <button className="btn btn-danger mx-2 mb-5" onClick={closeForm}>
          CLose
        </button>
      </form>
    </div>
  );
};

export default AddResturant;
