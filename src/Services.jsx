import React from "react";
import Sdata from "./Sdata";
import Card from "./Card";
const Services = () => {
  return (
    <>
      <div className="container-fluid mt-5 mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-5">
                  {
                    Sdata.map((currind,ind)=>{
                      return(<Card key={ind} imgsrc={currind.imgsrc} title={currind.title} discription={currind.message} />)
                    })
                  }
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
export default Services;