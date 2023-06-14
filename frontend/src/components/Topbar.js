import React from "react";
import "./topbar.css";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Topbar = () => {
    const navigate= useNavigate()
    return (
        <div data-testid="topbar" className="container-fluid position-relative nav-bar p-0">
            <div className="container-fluid bg-primary py-3 d-none d-md-block">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 text-center text-lg-left mb-2 mb-lg-0">
                            <div className="d-inline-flex align-items-center">
                                <a className="text-white pr-3" href="">Home</a>
                                <span className="text-white">|</span>
                                <a className="text-white px-3" href="">Resturant</a>
                                <span className="text-white">|</span>
                                <a className="text-white px-3" href="">Store</a>
                            </div>
                        </div>
                        <div className="col-md-6 text-center text-lg-right">
                            <div className="d-inline-flex align-items-center">
                                <Button className="btn btn-info" onClick={()=>{localStorage.removeItem("token");navigate("/Login")}}>Logout</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Topbar;
