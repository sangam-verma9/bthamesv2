import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../src/images/logo.png"
const Navbar =()=>{
    return (
        <>
            <div className="container-fluid bg-light">
                <div className="row">
                    <div className="col-12 mx-auto">
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <div className="container-fluid">
                                <img src={logo} alt="" style={{height:"50px", width:"50px"}} />
                                <NavLink className="navbar-brand" to="https://www.bthames.in"><b>BThames</b></NavLink>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav ms-auto  mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <NavLink  className="nav-link" aria-current="page" to="/"><b>Home</b></NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink  className="nav-link" to="/services"><b>Services</b></NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink  className="nav-link" to="/about"><b>About</b></NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink  className="nav-link" to="/contect"><b>Contect</b></NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink  className="nav-link" to="/feedback"><b>Feedback</b></NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Navbar;
