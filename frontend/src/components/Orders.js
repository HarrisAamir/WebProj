import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const navigate= useNavigate();
  let totalAmount=0
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

  orders.forEach((o)=>{totalAmount+=(+o.OrderPrice)})
  return (
    <div>
    
       <h2 class="text-center"> Orders </h2>
      <table className="text-center table mx-auto text-dark table-bordered ">
        <thead>
          <tr>
            <th>Customer Username</th>
            <th>Seller Name</th>
            <th>Delivery Address</th>
            <th>items</th>
            <th>Status</th>
            <th>Amount</th>
            <th>Date</th>

          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
           
            <tr key={order._id}>
              <td>{order.CustomerID}</td>
              <td>{order.ShopID}</td>
              <td>{order.OrderDropOffLocation}</td>
              <td>{order.OrderItems}</td>
              <td>{order.OrderStatus}</td>
              <td>{order.OrderPrice}</td>
              <td>{order.OderDate}</td>
            </tr>
          ))}
          <tr>
          <th colSpan={5}>Total Amount</th>
          <th>{totalAmount}</th>
          </tr>

        </tbody>
      </table>
    </div>
  );
};

export default Orders;
