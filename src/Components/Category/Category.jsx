import React from "react";
import "./Category.css";
import catflower from "../../Images/category-flower.png";
import vegitable from "../../Images/vegitable.png";
import flesh from "../../Images/flesh.png";
import fruitmarket from "../../Images/fruitmarket.png";
import coffie from "../../Images/coffie.png";
import chopstick from "../../Images/chopstick.png";

const Category = () => {
  return (
    <>
      <div className="container-fluid ">
        <div className="category-section">
          <div className="category-headline mt-5 ms-5">
            <h2 className="d-flex justify-content-start categoryh2">
              Enjoy your favorite
            </h2>

            <h2 className="d-flex justify-content-start categoryh2">
              grocery items
            </h2>
          </div>

          <div className="flower-section">
            <img src={catflower} className="flower-img" />
          </div>

          <div className="category-headline ms-5 mb-5">
            <h4 className="d-flex justify-content-start categoryh2">
              Shop by category
            </h4>
          </div>
        </div>
        <div
          className="row"
          style={{
            justifyContent: "space-evenly",
          }}>
          <div className="col-md-2 col-sm-2 col-lg-2 col-xl-2 catcard-mobile">
            <div className="card w-100 h-75">
              <div className="card-body catinnerbody-card">
                <img
                  src={vegitable}
                  style={{
                    width: "200px",
                    height: "150px",
                  }}
                  className="cat-card-imgmobileview img-fluid"
                  alt="Card Image"
                />
                <p className="card-title cat-card-title mt-2 mb-4">Vegitable</p>
              </div>
            </div>
          </div>
          <div className="col-md-2 col-sm-2 col-lg-2 col-xl-2 catcard-mobile">
            <div className="card w-100 h-75">
              <div className="card-body catinnerbody-card">
                <img
                  src={coffie}
                  style={{
                    width: "200px",
                    height: "150px",
                  }}
                  className="cat-card-imgmobileview img-fluid"
                  alt="Card Image"
                />
                <p className="card-title cat-card-title mt-2 mb-4">Beverages</p>
              </div>
            </div>
          </div>
          <div className="col-md-2 col-sm-2 col-lg-2 col-xl-2 catcard-mobile">
            <div className="card w-100 h-75">
              <div className="card-body catinnerbody-card">
                <img
                  src={chopstick}
                  style={{
                    width: "200px",
                    height: "150px",
                  }}
                  className="cat-card-imgmobileview img-fluid"
                  alt="Card Image"
                />
                <p className="card-title cat-card-title mt-2 mb-4 cat-card-title-mobile-view">
                  Noodles/Pasta
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-2 col-sm-2 col-lg-2 col-xl-2 catcard-mobile">
            <div className="card w-100 h-75">
              <div className="card-body catinnerbody-card">
                <img
                  src={fruitmarket}
                  style={{
                    width: "200px",
                    height: "150px",
                  }}
                  className="cat-card-imgmobileview img-fluid"
                  alt="Card Image"
                />
                <p className="card-title cat-card-title mt-2 mb-4">Fruits</p>
              </div>
            </div>
          </div>
          <div className="col-md-2 col-sm-2 col-lg-2 col-xl-2 catcard-mobile">
            <div className="card w-100 h-75">
              <div className="card-body catinnerbody-card">
                <img
                  src={flesh}
                  style={{
                    width: "200px",
                    height: "150px",
                  }}
                  className=" cat-card-imgmobileview img-fluid"
                  alt="Card Image"
                />
                <p className="card-title cat-card-title mt-2 mb-4 ">
                  Frozen food
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="view-allbtn mt-3">
          <button className="view-allbutton">VIEW ALL</button>
        </div>
      </div>
    </>
  );
};

export default Category;
