import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useContext } from 'react';
import { LoginContext } from '../App';
import { useNavigate } from 'react-router-dom';
const Customers = () => {
  const [users, setUsers] = useState([]);
  const {logedIn}= useContext(LoginContext)
  const navigate = useNavigate();
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3001/admin/getAllCustomers",{headers: {
        token: localStorage.getItem("token"),
        "Content-Type": "application/json",
      }}); 
      setUsers(response.data);
      console.log(response.data)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  const filter=(val)=>{
    if (val==="")
        fetchData()
    let userarr= users.filter((user) => {
        // Modify the property name below to match the property in your array of objects
        return user.name.includes(val);
  })
  setUsers(userarr)
}
  return (
    <div>
     {logedIn===true?<></>:navigate("/login")} 
        <div className="container">
      <div className="row">
        <div className="col"></div> {/* Empty column */}
        <div className="col-6">
          <h2 className="text-center">Registered Customers</h2>
        </div>

        <div className="col-3">
          <div>
            <img src="https://cdn.icon-icons.com/icons2/3392/PNG/512/small_search_icon_213735.png" width={"40px"} className='d-inline '></img>
          <input
            type="text"
            className=" d-inline form-control"
            style={{width:"200px"}}
            placeholder='Search Here...'
            onChange={(e) => filter(e.target.value)}
          />
          </div>
        </div>
      </div>
    </div>
      <table className="text-center table mx-4  text-dark table-bordered ">
        <thead>
          <tr>
            <th>Username</th>
            <th>Password</th>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user.username}</td>
              <td>{user.password}</td>
              <td>{user.name}</td>
              <td><u><a className='text-dark ' href={"mailto:"+user.email}>{user.email}</a></u></td>
              <td>{user.address}</td>
              <td>{user.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Customers;
