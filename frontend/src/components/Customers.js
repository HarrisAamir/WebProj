import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Customers = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3001/admin/getAllCustomers",{headers: {
        token: localStorage.getItem("token"),
        "Content-Type": "application/json",
      }}); 
      setData(response.data);
      console.log(response.data)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <h2 className='text-center'>Registerd Customers</h2>
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
          {data.map((user) => (
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
