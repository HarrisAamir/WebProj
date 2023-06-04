import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Restaurant from './Resturant';
// import RegisterRestaurant from './RegisterRestaurant';
// import ManageCustomers from './ManageCustomers';
const AdminDashboard = () => {
  let checkLogined= false
  const [manageResturants, setManageResturants]= useState(true)
  const [manageCustomers, setManageCustomers]= useState(false)
  const [manageStores, setManageStores]= useState(false)
  const [manageRiders, setManageRiders]= useState(false)
  const token = localStorage.getItem('token');
  const navHandler=(opt)=>{
    switch (opt) {
      case 1:
        setManageResturants(true)
        setManageCustomers(false)
        setManageStores(false)
        setManageRiders(false)
        break;
      case 2:
        setManageResturants(false)
        setManageCustomers(true)
        setManageStores(false)
        setManageRiders(false)
        break;
      case 3:
          setManageResturants(false)
          setManageCustomers(false)
          setManageStores(true)
          setManageRiders(false)
          break;
      case 4:
         setManageResturants(false)
         setManageCustomers(true)
         setManageStores(false)
         setManageRiders(true)
         break;
    
      default:
        break;
    }
  }
  token==null?checkLogined=false:checkLogined=true;
  const navigate = useNavigate();
  const logout = ()=>{
    alert("you are not logedin ")
    navigate('/login') }
      return (
       <div>
        <h1 className="m-3">Admin Dashboard</h1>
        {checkLogined===false?logout():<></>}
      <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
        <ul className="navbar-nav">
        <li className="nav-link" onClick={()=>{navHandler(1)}} >
           <Link className='nav-link'> Manage Restaurant </Link>
        </li>
        <li className="nav-link" onClick={()=>{navHandler(2)}} >
           <Link className='nav-link'> Manage Customers </Link>
        </li>
        <li className="nav-link" onClick={()=>{navHandler(3)}} >
           <Link className='nav-link'> Manage Groccery Stores </Link>
        </li>
        <li className="nav-link" onClick={()=>{navHandler(4)}} >
           <Link className='nav-link'> Manage Riders </Link>
        </li>
        </ul>
      </nav>
      <div className="mt-4 content">
        {manageResturants?<div>{<Restaurant/>}</div>:<></>}
        {manageCustomers?<>Customer</>:<></>}
        {manageStores?<>store</>:<></>}
        {manageRiders?<>rider</>:<></>}
      </div>
      </div>
      )
};

export default AdminDashboard;
