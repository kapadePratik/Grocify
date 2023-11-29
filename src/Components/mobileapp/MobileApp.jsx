import React from "react";
import "./MobileApp.css";
import mobileimg from "../../Images/cellphone.png";
import applestore from "../../Images/applestore.png";
import playstore from "../../Images/playstore.png";
const MobileApp = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-8">
          <div className="image-container">
            <img
              src={mobileimg}
              alt="Overlay Image"
              className=" mobile-img img-fluid"
            />
          </div>
        </div>
        <div className="col-md-4 mt-5">
          <div
            className="mt-5 mobileApp-mobileview"
            style={{
              marginRight: "150px",
            }}>
            <h2 className="d-flex hero-headline ">Download Our</h2>
            <h2 className="d-flex hero-headline">Mobile App</h2>
            <p className="mt-3 mobileapp-para"> Simple and efficient to use!</p>
          </div>
        </div>

<div className="row mt-5 ">
        <div className="col-12 text-center d-flex justify-content-between">
        <a href="https://example.com">
              <img
                src={applestore}
                className=" store-icon download-store-mobile-view"
                alt="Description of the image"
              />
            </a>
            <a href="https://example.com">
            <img
              src={playstore}
              className=" store-icon  download-store-mobile-view"
              alt="Description of the image"
            />
          </a>
        </div>
      </div>
      </div>
    </div>
  );
};

export default MobileApp;
