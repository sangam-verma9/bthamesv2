import React from "react";
import { Link } from "react-router-dom";
import logo from "../src/images/logo.png"
import manwor from "../src/images/about1.jpg"
import phone from "../src/images/about2.png"
const About = () => {
  return (
    <>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto pt-5">
            <div className="row d-flex  align-items-center mb-3">
              <div className="col-md-6 col-sm-12 mb-5">
                <div>
                  <img src={logo} alt="" className="img-fluid" />
                </div>
              </div>
              <div className="col-md-6 col-sm-12 mb-5">
                <div>
                  <h5 className="aboutdis">
                    B Thames is online home services platform. B Thames is launched in 2022,
                    B Thames today operates in Kanpur, India. The platform helps customers
                    book reliable and high quality services- home cleaning services,
                    appliance repair, painting, ac repair and servicing, car washing at
                    customers doorstep and many more which are delivered by trained
                    professionals conveniently at home. Till date this is a self funded
                    company. B Thames stands for Batch of The Home And Multi Establishment
                    Services.
                  </h5>
                </div>
              </div>
              <div className="col-md-6 col-sm-12 mb-5">
                <div>
                  <h5 className="aboutdis">
                    B Thames provides a platform that allows skilled and experienced
                    professionals to connect with users looking for specific services.
                    Our mission is to empower millions of service professionals by
                    delivering services at home in a way that has never been experienced
                    before at very affordable price. We will add many more services with
                    time. And we will also expand our company all over the India,
                    so that everyone can be benefited from our services.
                  </h5>
                </div>
              </div>
              <div className="col-md-6 col-sm-12 mb-5">
                <img src={manwor} alt="" className="img-fluid" />
              </div>
              <div className="col-md-6 col-sm-12 mb-5">
                <img src={phone} alt="" className="img-fluid imageskew" />
              </div>
              <div className="col-md-6 col-sm-12 mb-5">
                <h2 className="aboutdis">Connect with us through our App</h2>
                <div className="appbtnmain">
                  <Link to="https://apple.com" className="btn btn-outline-dark appbtn"><b><i className="fa-brands fa-apple"></i>Download</b></Link>
                  <Link to="https://play.google.com/store" className="btn btn-outline-dark appbtn"><b><i className="fa-brands fa-google-play"></i>Download</b></Link>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

    </>
  )
}
export default About;