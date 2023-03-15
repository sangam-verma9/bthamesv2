import React from "react";
import { NavLink } from "react-router-dom";
let title ="";
const Card = (propes) => {
    
    const passvalue=()=>{
        title=propes.title;
    }
    
    return (
        <>
            <div className="col-md-4 col-sm-10 mx-auto mb-4 ">
                <div className="card">
                    <img src={propes.imgsrc} className="card-img-top img-fluid" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{propes.title}</h5>
                        <p className="card-text">{propes.discription}</p>
                        <NavLink to="/book" className="btn btn-success" value="Book" onClick={passvalue}>Book Now </NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Card;
export {title} ;
