import { useState } from "react";
import "./GroceryDisplay.css";
import { MdAddShoppingCart } from "react-icons/md";
import propowder from "../../Images/proteinpow.png";
import fish from "../../Images/fish.png";
import chiken from "../../Images/chiken.png";
import tomato from "../../Images/tomato.png";
import grapes from "../../Images/grapes.png";
import watermelon from "../../Images/watermelon.png";
import fishplate from "../../Images/fishplate.png";
import chinamud from "../../Images/china mud.png";
import cornflex from "../../Images/cornflex.png";
import banana from "../../Images/banana.png";

const GroceryDisplay = () => {
  // var buttonPlus = (".qty-btn-plus");
  // var buttonMinus = (".qty-btn-minus");

  // var incrementPlus = buttonPlus.click(function () {
  //   var n = (this).parent(".qty-container").find(".input-qty");
  //   n.val(Number(n.val()) + 1);
  // });

  // var incrementMinus = buttonMinus.click(function () {
  //   var n = (this).parent(".qty-container").find(".input-qty");
  //   var amount = Number(n.val());
  //   if (amount > 0) {
  //     n.val(amount - 1);
  //   }
  // });

  return (
    <div className="container-fluid">
      <div className="grocery-display">
        <div className="display-title">
          <h3 className="display-titleheadline">GROCERY DISPLAY</h3>
        </div>

      
      </div>

      <div
        className="row mt-5 grocerycard-body-mobile-view"
        style={{
          justifyContent: "space-evenly",
        }}>
        <div className="col-md-2 col-sm-2 col-lg-2 col-xl-2  display-mobile-card">
          <div
            className="card display-card "
            style={{
              borderBottomLeftRadius: "25px",
              borderBottomRightRadius: "25px",
            }}>
            <div className="card-body ">
              <div className="mb-0">
                <img src={propowder} className=" change-image-wh" />
              </div>
              <label className="display-card-title mt-3">Milo</label>
              <br />
              <s
                className="mt-2 offer-price"
                style={{
                  fontSize: "24px",
                }}>
                N 2000.0
              </s>
            </div>
            <div className="d-flex justify-content-evenly mb-3">
              <div class="qty-container">
                <button class="qty-btn-minus btn-light" type="button">
                  <i class="fa fa-minus"></i>
                </button>
                <input type="text" name="qty" value="0" class="input-qty" />
                <button class="qty-btn-plus btn-light" type="button">
                  <i class="fa fa-plus"></i>
                </button>
              </div>

              <button className="display-addtocartbtn">
                <MdAddShoppingCart size={20} /> Add to cart
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-2 col-sm-2 col-lg-2 col-xl-2">
          <div
            className="card display-card"
            style={{
              borderBottomLeftRadius: "25px",
              borderBottomRightRadius: "25px",
            }}>
            <div className="card-body">
              <div className="mb-0">
                <img src={tomato} className=" change-image-wh" />
              </div>
              <label className="display-card-title mt-3">Tomato</label>
              <br />
              <s
                className="mt-2 offer-price"
                style={{
                  fontSize: "24px",
                }}>
                N 2000.0
              </s>
            </div>
            <div className="d-flex justify-content-evenly mb-3">
              <div class="qty-container">
                <button class="qty-btn-minus btn-light" type="button">
                  <i class="fa fa-minus"></i>
                </button>
                <input type="text" name="qty" value="0" class="input-qty" />
                <button class="qty-btn-plus btn-light" type="button">
                  <i class="fa fa-plus"></i>
                </button>
              </div>

              <button className="display-addtocartbtn">
                <MdAddShoppingCart size={20} /> Add to cart
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-2 col-sm-2 col-lg-2 col-xl-2">
          <div
            className="card display-card"
            style={{
              borderBottomLeftRadius: "25px",
              borderBottomRightRadius: "25px",
            }}>
            <div className="card-body">
              <div className="mb-0">
                <img src={chiken} className="change-image-wh" />
              </div>
              <label className="display-card-title mt-3">Chicken</label>
              <br />
              <s
                className="mt-2 offer-price"
                style={{
                  fontSize: "24px",
                }}>
                N 2000.0
              </s>
            </div>
            <div className="d-flex justify-content-evenly mb-3">
              <div class="qty-container">
                <button class="qty-btn-minus btn-light" type="button">
                  <i class="fa fa-minus"></i>
                </button>
                <input type="text" name="qty" value="0" class="input-qty" />
                <button class="qty-btn-plus btn-light" type="button">
                  <i class="fa fa-plus"></i>
                </button>
              </div>

              <button className="display-addtocartbtn">
                <MdAddShoppingCart size={20} /> Add to cart
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-2 col-sm-2 col-lg-2 col-xl-2">
          <div
            className="card display-card"
            style={{
              borderBottomLeftRadius: "25px",
              borderBottomRightRadius: "25px",
            }}>
            <div className="card-body">
              <div className="mb-0">
                <img src={cornflex} className=" change-image-wh" />
              </div>
              <label className="display-card-title mt-3">Cornflakes</label>
              <br />
              <s
                className="mt-2 offer-price"
                style={{
                  fontSize: "24px",
                }}>
                N 2000.0
              </s>
            </div>
            <div className="d-flex justify-content-evenly mb-3">
              <div class="qty-container">
                <button class="qty-btn-minus btn-light" type="button">
                  <i class="fa fa-minus"></i>
                </button>
                <input type="text" name="qty" value="0" class="input-qty" />
                <button class="qty-btn-plus btn-light" type="button">
                  <i class="fa fa-plus"></i>
                </button>
              </div>

              <button className="display-addtocartbtn">
                <MdAddShoppingCart size={20} /> Add to cart
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-2 col-sm-2 col-lg-2 col-xl-2">
          <div
            className="card display-card"
            style={{
              borderBottomLeftRadius: "25px",
              borderBottomRightRadius: "25px",
            }}>
            <div className="card-body">
              <div className="mb-0">
                <img src={watermelon} className=" change-image-wh" />
              </div>
              <label className="display-card-title mt-3">Watermelon</label>
              <br />
              <s
                className="mt-2 offer-price"
                style={{
                  fontSize: "24px",
                }}>
                N 2000.0
              </s>
            </div>
            <div className="d-flex justify-content-evenly mb-3">
              <div class="qty-container">
                <button class="qty-btn-minus btn-light" type="button">
                  <i class="fa fa-minus"></i>
                </button>
                <input type="text" name="qty" value="0" class="input-qty" />
                <button class="qty-btn-plus btn-light" type="button">
                  <i class="fa fa-plus"></i>
                </button>
              </div>

              <button className="display-addtocartbtn">
                <MdAddShoppingCart size={20} /> Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className="row grocerycard-body-mobile-view"
        style={{
          justifyContent: "space-evenly",
        }}>
        <div className="col-md-2 col-sm-2 col-lg-2 col-xl-2">
          <div
            className="card display-card"
            style={{
              borderBottomLeftRadius: "25px",
              borderBottomRightRadius: "25px",
            }}>
            <div className="card-body">
              <div className="mb-0">
                <img src={banana} className=" change-image-wh" />
              </div>
              <label className="display-card-title mt-3">Banana</label>
              <br />
              <s
                className="mt-2 offer-price"
                style={{
                  fontSize: "24px",
                }}>
                N 2000.0
              </s>
            </div>
            <div className="d-flex justify-content-evenly mb-3">
              <div class="qty-container">
                <button class="qty-btn-minus btn-light" type="button">
                  <i class="fa fa-minus"></i>
                </button>
                <input type="text" name="qty" value="0" class="input-qty" />
                <button class="qty-btn-plus btn-light" type="button">
                  <i class="fa fa-plus"></i>
                </button>
              </div>

              <button className="display-addtocartbtn">
                <MdAddShoppingCart size={20} /> Add to cart
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-2 col-sm-2 col-lg-2 col-xl-2">
          <div
            className="card display-card"
            style={{
              borderBottomLeftRadius: "25px",
              borderBottomRightRadius: "25px",
            }}>
            <div className="card-body">
              <div className="mb-0">
                <img src={chinamud} className=" change-image-wh" />
              </div>
              <label className="display-card-title mt-3">Yam Flour</label>
              <br />
              <s
                className="mt-2 offer-price"
                style={{
                  fontSize: "24px",
                }}>
                N 2000.0
              </s>
            </div>
            <div className="d-flex justify-content-evenly mb-3">
              <div class="qty-container">
                <button class="qty-btn-minus btn-light" type="button">
                  <i class="fa fa-minus"></i>
                </button>
                <input type="text" name="qty" value="0" class="input-qty" />
                <button class="qty-btn-plus btn-light" type="button">
                  <i class="fa fa-plus"></i>
                </button>
              </div>

              <button className="display-addtocartbtn">
                <MdAddShoppingCart size={20} /> Add to cart
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-2 col-sm-2 col-lg-2 col-xl-2">
          <div
            className="card display-card"
            style={{
              borderBottomLeftRadius: "25px",
              borderBottomRightRadius: "25px",
            }}>
            <div className="card-body">
              <div className="mb-0">
                <img src={fish} className="change-image-wh" />
              </div>
              <label className="display-card-title mt-3">Fish</label>
              <br />
              <s
                className="mt-2 offer-price"
                style={{
                  fontSize: "24px",
                }}>
                N 2000.0
              </s>
            </div>
            <div className="d-flex justify-content-evenly mb-3">
              <div class="qty-container">
                <button class="qty-btn-minus btn-light" type="button">
                  <i class="fa fa-minus"></i>
                </button>
                <input type="text" name="qty" value="0" class="input-qty" />
                <button class="qty-btn-plus btn-light" type="button">
                  <i class="fa fa-plus"></i>
                </button>
              </div>

              <button className="display-addtocartbtn">
                <MdAddShoppingCart size={20} /> Add to cart
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-2 col-sm-2 col-lg-2 col-xl-2">
          <div
            className="card display-card"
            style={{
              borderBottomLeftRadius: "25px",
              borderBottomRightRadius: "25px",
            }}>
            <div className="card-body">
              <div className="mb-0">
                <img src={grapes} className=" change-image-wh" />
              </div>
              <label className="display-card-title mt-3">Grapes</label>
              <br />
              <s
                className="mt-2 offer-price"
                style={{
                  fontSize: "24px",
                }}>
                N 2000.0
              </s>
            </div>
            <div className="d-flex justify-content-evenly mb-3">
              <div class="qty-container">
                <button class="qty-btn-minus btn-light" type="button">
                  <i class="fa fa-minus"></i>
                </button>
                <input type="text" name="qty" value="0" class="input-qty" />
                <button class="qty-btn-plus btn-light" type="button">
                  <i class="fa fa-plus"></i>
                </button>
              </div>

              <button className="display-addtocartbtn">
                <MdAddShoppingCart size={20} /> Add to cart
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-2 col-sm-2 col-lg-2 col-xl-2">
          <div
            className="card display-card"
            style={{
              borderBottomLeftRadius: "25px",
              borderBottomRightRadius: "25px",
            }}>
            <div className="card-body">
              <div className="mb-0">
                <img src={fishplate} className=" change-image-wh" />
              </div>
              <label className="display-card-title mt-3">Fish fillets</label>
              <br />
              <s
                className="mt-2 offer-price"
                style={{
                  fontSize: "24px",
                }}>
                N 2000.0
              </s>
            </div>
            <div className="d-flex justify-content-evenly mb-3">
              <div class="qty-container">
                <button class="qty-btn-minus btn-light" type="button">
                  <i class="fa fa-minus"></i>
                </button>
                <input type="text" name="qty" value="0" class="input-qty" />
                <button class="qty-btn-plus btn-light" type="button">
                  <i class="fa fa-plus"></i>
                </button>
              </div>

              <button className="display-addtocartbtn">
                <MdAddShoppingCart size={20} /> Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="see-allbtn mt-5 seall-btnmobile-view">
          <button className="view-allbutton">See more</button>
        </div>
    </div>
  );
};

export default GroceryDisplay;
