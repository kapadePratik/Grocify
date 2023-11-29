import React from "react";
import "./Hero.css";
import deliveryboy from "../../Images/deliveryboy.png";
import deliveryboybg from "../../Images/deliveryboybg.png";

const Hero = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="img-section">
          <div className="row">
            <div>
              <h2 className="d-flex hero-headline ">Why We Are The</h2>
              <h2 className="d-flex hero-headline">Best?</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8">
              <div className="image-container">
                <img
                  src={deliveryboy}
                  alt="Overlay Image"
                  className="overlay-image  boy-img"
                />
              </div>
            </div>

            <div className="col-md-4 mt-5">
              <div className="hero-card-container hero-card-mobile-view">
                <div className="outer-card">
                  <div className="row p-2">
                    <div className="col-md-1 mt-3">
                      <p className="circlegreen circle-mobile"></p>
                    </div>
                    <div className="col-md-11 ">
                      <span className="hero-span ">
                        We serve you the best of fresh, nutrient-rich and
                        healthy groceries
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hero-card-container hero-card-mobile-view">
                <div className="outer-card">
                  <div className="row p-2">
                    <div className="col-md-1 mt-3">
                      <p className="circleyellow circle-mobile"></p>
                    </div>
                    <div className="col-md-11">
                      <span className="hero-span">Swift Delivery</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hero-card-container hero-card-mobile-view">
                <div className="outer-card">
                  <div className="row p-2">
                    <div className="col-md-1 mt-3">
                      <p className="circlegreen circle-mobile"></p>
                    </div>
                    <div className="col-md-11">
                      <span className="hero-span">Great Refund Policy</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hero-card-container hero-card-mobile-view">
                <div className="outer-card">
                  <div className="row p-2">
                    <div className="col-md-1 mt-3">
                      <p className="circleyellow circle-mobile"></p>
                    </div>
                    <div className="col-md-11">
                      <span className="hero-span">Wide coverage Map</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="sale-section">
          <div className="row">
            <div className="underline-text ">
              <div class="line" style={{ backgroundColor: "#000000" }}></div>
              <div class="text">Flash Sales</div>
              <div class="line" style={{ backgroundColor: "#000000" }}></div>
            </div>
          </div>
          <div className="row mt-5 ">
            <div className="col-md-4  salesection-mobile">
              <div className="card bg-dark text-white ">
                <div className="card-body">
                  <h5 className="card-title sales-numtext">02</h5>
                  <p className="card-text sales-greytext">DAYS</p>
                </div>
              </div>
            </div>

            <div className="col-md-4  salesection-mobile">
              <div className="card bg-dark text-white">
                <div className="card-body">
                  <h5 className="card-title sales-numtext">14</h5>
                  <p className="card-text sales-greytext">HOURS</p>
                </div>
              </div>
            </div>
            <div className="col-md-4  salesection-mobile">
              <div className="card bg-dark text-white">
                <div className="card-body">
                  <h5 className="card-title sales-numtext">15</h5>
                  <p className="card-text sales-greytext">MINS</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
