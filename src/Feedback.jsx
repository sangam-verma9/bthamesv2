import React, { useState } from "react";
import swal from "sweetalert";

const Feedback = () => {
  const [val1,setval1]=useState("");
  const [val2,setval2]=useState("");
  const [val3,setval3]=useState("");
  const changeoccur1=(e)=>{
    setval1(e.target.value)
  }
  const changeoccur2=(e)=>{
    setval2(e.target.value)
  }
  const changeoccur3=(e)=>{
    setval3(e.target.value)
  }
  const successm=()=>{
   if((val1 || val2 || val3) !==""){ swal({
      title: "Thanks for feedback!",
      icon: "success",
    });}
    else{
      swal({
        title: "Fill the field before submit!",
        icon: "warning",
      });
    }
  }

  return (
    <>
      <div className="container-fluid ">
        <div className="row">
          <div className="col-10 mx-auto pt-5">
            <div className="row d-flex  align-items-center mb-3">
              <div className="col-md-6 col-sm-12 mb-sm-5">
                <h2 className="ratingheading">Please rate our service</h2>
                <div className="rate">
                  <input type="button" value="🤩" />
                  <input type="button" value="😊" />
                  <input type="button" value="🙂" />
                  <input type="button" value="😐" />
                  <input type="button" value="😓" />
                </div>
                <br />
                <h3>
                  We always try our best to improve your life style by such services if you
                  want to give some suggestion to me then please!:
                </h3>
                
                <textarea name="address" id="address"  placeholder="Give suggestion" style={{padding:"8px"}} value={val1} onChange={changeoccur1}></textarea>


              </div>
              <div className="col-md-6 col-sm-12" >
                <fieldset >
                  <legend><h2 className="ratingheading">Feedback:</h2></legend>
                  
                  <textarea name="address" id="address"  placeholder="Give Feedback" style={{padding:"8px"}} value={val2} onChange={changeoccur2}></textarea>
                  
                </fieldset>
                <fieldset>
                  <legend><h2 className="ratingheading">Quary:</h2></legend>
                  
                  <textarea name="address" id="address"  placeholder="Any Quary" style={{padding:"8px"}} value={val3} onChange={changeoccur3}></textarea>
                  
                </fieldset>

              </div>
            </div>
            <div className="feedbacksubmit">
            <input type="button" value="Submit" className="btn btn-outline-info" onClick={successm}  />
            </div>
            
          </div>
        </div>
      </div>

    </>
  )
}
export default Feedback;