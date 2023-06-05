import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
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
        <h1 className="m-3 text-center">Admin Dashboard</h1>
        {checkLogined===false?logout():<></>}
        <div className="container bg-light rounded ">
      <div className="row justify-content-center">
        <div className="col">
          <ul className="d-flex list-inline mt-3 justify-content-between">
          <li className='list-inline-item' onClick={()=>{navHandler(1)}} >
           <Link className='text-dark'> Manage Restaurant </Link>
        </li>
        <li className="list-inline-item" onClick={()=>{navHandler(2)}} >
           <Link className='text-dark'> Manage Customers </Link>
        </li>
        <li className='list-inline-item' onClick={()=>{navHandler(3)}} >
           <Link className='text-dark'> Manage Groccery Stores </Link>
        </li>
        <li className='list-inline-item' onClick={()=>{navHandler(4)}} >
           <Link className='text-dark'> Manage Orders </Link>
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
