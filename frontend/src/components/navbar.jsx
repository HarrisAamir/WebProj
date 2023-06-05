import React from "react";
import "./navbar.css";

const navbar = () => {
    return (

        <div data-testid="navbar" className="container-fluid position-relative nav-bar p-0">

            <div className="container-lg position-relative p-0 px-lg-3">
                <nav className="navbar navbar-expand-lg bg-white navbar-light shadow p-lg-0">
                    <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse" >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                        <div className="navbar-nav ml-auto py-0">
                            <a href="/home" className="nav-item nav-link active">
                                Home
                            </a>
                            <a href="/restuarnt" className="nav-item nav-link">
                                Resturant
                            </a>
                            <a href="/groccery" className="nav-item nav-link">
                                Grocery
                            </a>
                        </div>
                        <a
                            href="index.html"
                            className="navbar-brand mx-5 d-none d-lg-block"
                        >
                            {/* <h1 className="m-0 display-4 text-primary">FOODIE</h1> */}
                            <h1 className="m-0 display-4 text-primary">
                                {/* <span className="text-secondary">S</span> */}
                                Store
                                <span className="text-secondary"> 2 </span>
                                Door
                            </h1>

                        </a>
                        <div className="navbar-nav mr-auto py-0">
                            <a href="/contact" className="nav-item nav-link">
                                Contact
                            </a>
                            <a href="gallery.html" className="nav-item nav-link">
                                Gallery
                            </a>
                            <a href="contact.html" className="nav-item nav-link">
                                Account
                            </a>
                        </div>
                    </div>
                </nav>
            </div>

        </div>
    );
};

export default navbar;
