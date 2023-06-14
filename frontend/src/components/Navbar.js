import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [link, setLink] = useState(window.location.href.split("/").pop());

  return (
    <div
      data-testid="navbar"
      className="container-fluid position-relative nav-bar p-0 mb-3"
    >
      <div className="container-lg position-relative p-0 px-lg-3">
        <nav className="navbar navbar-expand-lg bg-white navbar-light shadow p-lg-0">
          <button
            type="button"
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-between"
            id="navbarCollapse"
          >
            <div className="navbar-nav ml-auto py-0">
              <Link
                to="/Admin/ManageResturant"
                className={
                  link === "ManageResturant"
                    ? "nav-item nav-link active"
                    : "nav-item nav-link"
                }
                onClick={() => {
                  setLink("ManageResturant");
                }}
              >
                Resturants
              </Link>
              <Link
                to="/Admin/ManageCustomers"
                className={
                  link === "ManageCustomers"
                    ? "nav-item nav-link active"
                    : "nav-item nav-link"
                }
                onClick={() => {
                  setLink("ManageCustomers");
                }}
              >
                Customers
              </Link>
             
            </div>
            <Link to="/" className="navbar-brand mx-5 d-none d-lg-block">
              <h1 className="m-0 display-4 text-primary">
                Store
                <span className="text-secondary"> 2 </span>
                Door
              </h1>
            </Link>
            <div className="navbar-nav mr-auto py-0">
              <Link
                to="/Admin/ManageOrders"
                className={
                  link === "orders"
                    ? "nav-item nav-link active"
                    : "nav-item nav-link"
                }
                onClick={() => {
                  setLink("orders");
                }}
              >
                Orders
              </Link>
              <Link
                to="/Admin/ManageGrocceryStore"
                className={
                  link === "ManageGrocceryStore"
                    ? "nav-item nav-link active"
                    : "nav-item nav-link"
                }
                onClick={() => {
                  setLink("ManageGrocceryStore");
                }}
              >
                Groccery Stores
              </Link>
              {/* <Link
                to="/Login"
                className={
                  link === "Login"
                    ? "nav-item nav-link active"
                    : "nav-item nav-link"
                }
                onClick={() => {
                  setLink("Login");
                }}
              >
                Groccery Store
                {/* {link === "Login" ? "Login" : "Logout"} */}
              
              {/* <Link
                to="/chat"
                className={
                  link === "chat"
                    ? "nav-item nav-link active"
                    : "nav-item nav-link"
                }
                onClick={() => {
                  setLink("chat");
                }}
              >
                Chat
              </Link> */}
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
