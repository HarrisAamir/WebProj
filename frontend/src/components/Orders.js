import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3001/admin/getAllOrders",{headers: {
        token: localStorage.getItem("token"),
        "Content-Type": "application/json",
      }}); 
      setOrders(response.data);
      console.log(response.data)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  const filter=(val)=>{
    if (val==="")
        fetchData()
    let userarr= orders.filter((user) => {
        // Modify the property name below to match the property in your array of objects
        return user.name.includes(val);
  })
  setOrders(userarr)
}
  return (
    <div>
       <h2 class="text-center"> Orders </h2>
      <table className="text-center table mx-4  text-dark table-bordered ">
        <thead>
          <tr>
            <th>CustomerID</th>
            <th>Delivery Address</th>
            <th>items</th>
            <th>status</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order._id}>
              <td>{order.customerid}</td>
              <td>{order.deliveryAddress}</td>
              <td>{order.itemid}</td>
              <td>{order.status}</td>
              <td>{order.createdAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
