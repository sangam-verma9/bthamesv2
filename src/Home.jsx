import React from "react";
import { NavLink,Link } from "react-router-dom";
import imghome from "../src/images/imagehome.png";
import Greet from "./Greet"
const Home =()=>{

  return(
    <>
      <div className="container-fluid mb-5 ">
        <div className="row">
          <div className="col-10 mx-auto mt-5 pt-5">
              <div className="row d-flex  align-items-center mb-3">
                <div className="col-md-6 col-sm-12 mb-5">
                  <h3>Hi! <strong>Sangam</strong> {Greet}</h3>
                  <h5>We are team of professional 
                  Cleaning and Repairing objects of general purpose applines.<br/>
                  We provide professional services at your doorstep with in <b>60</b> min*. </h5>

                  <h3>Start @299₹ At half of market price </h3>
                  <NavLink to="/services" className="btn btn-success" style={{fontSize:"1.5rem", fontFamily:"'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif", marginTop:"15px"}}>Book Now</NavLink>
                  <div className="login">
                    <Link to="/login" className="btn btn-outline-primary loginlink">Login</Link>
                    <Link to="/register" className="btn btn-outline-warning loginlink">Signup</Link>
                  </div>
                </div>
                <div className="col-md-6 col-sm-12">
                  <img src={imghome} alt="" className="img-fluid" />
                </div>
              </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Home;