import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Restaurant from './Resturant';
import Store from './Store';
import Customers from './Customers';
import Orders from './Orders';
// import RegisterRestaurant from './RegisterRestaurant';
// import ManageCustomers from './ManageCustomers';
const AdminDashboard = () => {
  let checkLogined= false
  const [manageResturants, setManageResturants]= useState(true)
  const [manageCustomers, setManageCustomers]= useState(false)
  const [manageStores, setManageStores]= useState(false)
  const [manageOrders, setManageOrders]= useState(false)
  const token = localStorage.getItem('token');
  token==null?checkLogined=false:checkLogined=true;
  const navHandler=(opt)=>{
    switch (opt) {
      case 1:
        setManageResturants(true)
        setManageCustomers(false)
        setManageStores(false)
        setManageOrders(false)
        break;
      case 2:
        setManageResturants(false)
        setManageCustomers(true)
        setManageStores(false)
        setManageOrders(false)
        break;
      case 3:
          setManageResturants(false)
          setManageCustomers(false)
          setManageStores(true)
          setManageOrders(false)
          break;
      case 4:
         setManageResturants(false)
         setManageCustomers(false)
         setManageStores(false)
         setManageOrders(true)
         break;
    
      default:
        break;
    }
  }

  const navigate = useNavigate();
  const logout = ()=>{
    alert("you are not logedin ")
    navigate('/login') }
      return (
       <div>
       
        {checkLogined===false?logout():<></>}
        <div className="container bg-light rounded mt-2 ">
        <div className="row justify-content-center">
        <h1 className="m-3 text-center">Admin Dashboard</h1>
        </div>
      <div className="row justify-content-center">
        <div className="col">
          <ul className="d-flex list-inline  justify-content-around">
          <li className={manageResturants?'list-inline-item bg-primary p-2 rounded shadow':'list-inline-item bg-info p-2 rounded'} onClick={()=>{navHandler(1)}} >
           <p className='text-light m-0'> Manage Restaurant </p>
        </li>
        <li className={manageCustomers?'list-inline-item bg-primary p-2 rounded shadow':'list-inline-item bg-info p-2 rounded'} onClick={()=>{navHandler(2)}} >
           <p className='text-light m-0'> Manage Customers </p>
        </li>
        <li className={manageStores?'list-inline-item bg-primary p-2 rounded shadow':'list-inline-item bg-info p-2 rounded'} onClick={()=>{navHandler(3)}} >
           <p className='text-light m-0'> Manage Groccery Stores </p>
        </li>
        <li className= {manageOrders?'list-inline-item bg-primary p-2 rounded shadow':'list-inline-item bg-info p-2 rounded'} onClick={()=>{navHandler(4)}} >
           <p className='text-light m-0'> Manage Orders </p>
        </li>
          </ul>
        </div>
      </div>
    </div>
      <div className=" bg-light mb-4">
      </div>
      <div className="mt-4 content">
        {manageResturants?<div>{<Restaurant/>}</div>:<></>}
        {manageCustomers?<div>{<Customers/>}</div>:<></>}
        {manageStores?<div>{<Store/>}</div>:<></>}
        {manageOrders?<>{<Orders/>}</>:<></>}
      </div>
      </div>
      )
};

export default AdminDashboard;
