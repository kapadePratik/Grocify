import React from "react";
import "./Review.css";
import happycustomerimg from "../../Images/happycustomerimg.png";
import review1 from "../../Images/reviewer1.png";
import review2 from "../../Images/reviewer2.png";

const Review = () => {
  return (
    <div className="container-fluid">
      <div className="review-section d-flex justify-content-between">
        <img src={happycustomerimg} className="happyflowerimg" />

        <div
          className="underline-text happy-clientmobileview"
          style={{
            marginRight: "255px",
          }}>
          <div class="line" style={{ backgroundColor: "#000000" }}></div>
          <div class="text ">Happy Clients</div>
          <div class="line" style={{ backgroundColor: "#000000" }}></div>
        </div>
      </div>

      <div className="row reviewrow-bg ">
        <div className="col-md-6 d-flex justify-content-center">
          <div class="review-card ms-5 review-card-mobile">
            <div class="review-content">
              <div class="stars d-flex justify-content-between">
                &#9733; &#9733; &#9733; &#9733; &#9733;
                <span
                  style={{
                    color: "#000000",
                  }}>
                  May 15,2022
                </span>
              </div>
              <p className="mt-5 mobile-view">
                Everything was great, super quick delivery, great packaging,
                attention to detail and very helpful staff. Thank you very much.
              </p>
            </div>
            <div className="mt-5">
              <img
                class="reviewer-photo w-25 ms-5"
                src={review1}
                alt="Reviewer Photo"
              />
              Robez Estabee
            </div>
          </div>
        </div>
        <div className="col-md-6 d-flex justify-content-center ">
          <div class="review-card ms-5 review-card-mobile">
            <div class="review-content">
              <div class="stars d-flex justify-content-between">
                &#9733; &#9733; &#9733; &#9733; &#9733;
                <span
                  style={{
                    color: "#000000",
                  }}>
                  May 19,2022
                </span>
              </div>
              <p className="mt-5 mobile-view">
                Great, super quick delivery, great service, good attention to
                detail and very helpful staff. Thank you grosa.
              </p>
            </div>
            <div className="mt-5">
              <img
                class="reviewer-photo w-25 ms-5"
                src={review2}
                alt="Reviewer Photo"
              />
              Jekins Pheobe
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
