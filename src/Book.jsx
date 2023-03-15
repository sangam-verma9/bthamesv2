import React from "react";
import { useNavigate } from "react-router-dom";
import { title } from "./Card"
const App = () => {
  // const checkconfirm=()=>{
  //   confirm("Press a button!")
  // }
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/thanks`; 
    console.log(path);
    return  navigate(path);
  }
  const event=()=>{
    if(window.confirm('Are you sure ot sumbit?')){
      return routeChange
    }
  }
const onFormSubmit=(e)=>{
  e.preventDefault();
} 
  
  return (
    
    <> 
      <h2 className="text-center lh-lg bookhading">Holi Offer <i className="fa-solid fa-gift text-danger"></i> <strike>499₹</strike> @299₹  save 200₹</h2>

      <div className="container mb-5 ">
        <div className="row ">
          <div className="col-md-7 col-sm-10 mx-auto" >
            <h1 className="text-center booktitle mt-3">{title}</h1>
            <form className="mb-5 bookbg"  onsubmit={onFormSubmit}>
              <div className="form-group">
                <label>Name*</label>
                <input type="text" className="form-control" id="bookname" aria-describedby="emailHelp" placeholder="Enter Name" autoComplete="off" required/>
              </div>
              <div className="form-group">
                <label>Phone No.*</label>
                <input type="number" className="form-control" id="bookphone" aria-describedby="emailHelp" placeholder="Enter Phone NO."autoComplete="off" required/>
              </div>
              <div className="form-group">
                <label>Email address*</label>
                <input type="email" className="form-control" id="bookEmail" aria-describedby="emailHelp" placeholder="Enter email"autoComplete="off" required/>
              </div>
              <div className="form-group">
                <label>Address*</label>
                <input type="text" className="form-control" id="bookaddress" aria-describedby="emailHelp" placeholder="Enter Address" autoComplete="off" required/>
              </div>
              <div className="form-group">
                <label>Work discription for {title}</label>
                <input type="text" className="form-control" id="bookwork" aria-describedby="emailHelp" placeholder="Enter work discroption" autoComplete="off"/>
              </div>

              <button type="submit" className="btn btn-primary" onClick={event} >Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
export default App;

// onClick={()=>{window.confirm("Are you sure to submit")}}