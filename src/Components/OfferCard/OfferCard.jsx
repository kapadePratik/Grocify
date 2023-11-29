import React from "react";
import "./OfferCard.css";
import trans from "../../Images/transimg.png";
import { IoMdAdd } from "react-icons/io";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Scrollbar, Ally, Pagination, Navigation } from "swiper/modules";
import picture from "../../Images/banana.png";
import picture1 from "../../Images/beaf.png";
import picture2 from "../../Images/chiken.png";

const OfferCard = () => {
  return (
    <>
      <div className="container-fluid mt-5">
        <div className="row offer-card-row">
          <div className="col-md-2">
            <article className="gradient-container card-offer">
              <div class="header">
                {/* <div class="featureImg "></div> */}
                <div className="">
                  <img
                    src={picture}
                    style={{
                      width: "500px",
                      height: "150px",
                    }}
                  />
                </div>
                <div class="flashSale">
                  <div class="flash">35%</div>
                  {/* <div class="sale">SALE</div> */}
                </div>
                <div class="shareBox">
                  <div class="closeBtn"></div>
                  <div class="copyLink">
                    <input
                      id="copyTarget"
                      type="text"
                      value="https://s.codepen.io/maxshine/debug/zKPzJX/"
                    />
                    <input id="copyLinkBtn" type="button" />
                    <label for="copyLinkBtn">Copy Link</label>
                  </div>
                </div>
              </div>
              <div class="body">
                <div className="item-des">
                  <p className="offerdes-name">Pork </p> &nbsp; &nbsp;
                  <s className="mt-2 offer-price">N2000.0</s>
                </div>
                <div className="card-footer">
                  <div className="item-des">
                    <s>N</s>
                    <p
                      style={{
                        color: "#000000",
                      }}>
                      1000.00/kg
                    </p>
                  </div>

                  <button className="add-btn mb-2">
                    <IoMdAdd size={24} />
                  </button>
                </div>
              </div>
            </article>
          </div>
          <div className="col-md-2 col-sm-2 col-lg-2 col-xl-2">
            <article className="gradient-container card-offer">
              <div class="header">
                {/* <div class="featureImg "></div> */}
                <div className="">
                  <img
                    src={picture}
                    className="img-fluid"
                    style={{
                      width: "500px",
                      height: "150px",
                    }}
                  />
                </div>
                <div class="flashSale">
                  <div class="flash">35%</div>
                  {/* <div class="sale">SALE</div> */}
                </div>
                <div class="shareBox">
                  <div class="closeBtn"></div>
                  <div class="copyLink">
                    <input
                      id="copyTarget"
                      type="text"
                      value="https://s.codepen.io/maxshine/debug/zKPzJX/"
                    />
                    <input id="copyLinkBtn" type="button" />
                    <label for="copyLinkBtn">Copy Link</label>
                  </div>
                </div>
              </div>
              <div class="body">
                <div className="item-des">
                  <p className="offerdes-name">Pork </p> &nbsp; &nbsp;
                  <s className="mt-2 offer-price">N2000.0</s>
                </div>
                <div className="card-footer">
                  <div className="item-des">
                    <s>N</s>
                    <p
                      style={{
                        color: "#000000",
                      }}>
                      1000.00/kg
                    </p>
                  </div>

                  <button className="add-btn mb-2">
                    <IoMdAdd size={24} />
                  </button>
                </div>
              </div>
            </article>
          </div>

          <div className="col-md-2 col-sm-2 col-lg-2 col-xl-2">
            <article className="gradient-container card-offer">
              <div class="header">
                {/* <div class="featureImg "></div> */}
                <div className="">
                  <img
                    src={picture1}
                    className="img-fluid"
                    style={{
                      width: "500px",
                      height: "150px",
                    }}
                  />
                </div>
                <div class="flashSale">
                  <div class="flash">35%</div>
                  {/* <div class="sale">SALE</div> */}
                </div>
                <div class="shareBox">
                  <div class="closeBtn"></div>
                  <div class="copyLink">
                    <input
                      id="copyTarget"
                      type="text"
                      value="https://s.codepen.io/maxshine/debug/zKPzJX/"
                    />
                    <input id="copyLinkBtn" type="button" />
                    <label for="copyLinkBtn">Copy Link</label>
                  </div>
                </div>
              </div>
              <div class="body">
                <div className="item-des">
                  <p className="offerdes-name">Pork </p> &nbsp; &nbsp;
                  <s className="mt-2 offer-price">N2000.0</s>
                </div>
                <div className="card-footer">
                  <div className="item-des">
                    <s>N</s>
                    <p
                      style={{
                        color: "#000000",
                      }}>
                      1000.00/kg
                    </p>
                  </div>

                  <button className="add-btn mb-2">
                    <IoMdAdd size={24} />
                  </button>
                </div>
              </div>
            </article>
          </div>

          <div className="col-md-2 col-sm-2 col-lg-2 col-xl-2">
            <article className="gradient-container card-offer">
              <div class="header">
                {/* <div class="featureImg "></div> */}
                <div className="">
                  <img
                    src={picture2}
                    className="img-fluid"
                    style={{
                      width: "500px",
                      height: "150px",
                    }}
                  />
                </div>
                <div class="flashSale">
                  <div class="flash">35%</div>
                  {/* <div class="sale">SALE</div> */}
                </div>
                <div class="shareBox">
                  <div class="closeBtn"></div>
                  <div class="copyLink">
                    <input
                      id="copyTarget"
                      type="text"
                      value="https://s.codepen.io/maxshine/debug/zKPzJX/"
                    />
                    <input id="copyLinkBtn" type="button" />
                    <label for="copyLinkBtn">Copy Link</label>
                  </div>
                </div>
              </div>
              <div class="body">
                <div className="item-des">
                  <p className="offerdes-name">Pork </p> &nbsp; &nbsp;
                  <s className="mt-2 offer-price">N2000.0</s>
                </div>
                <div className="card-footer">
                  <div className="item-des">
                    <s>N</s>
                    <p
                      style={{
                        color: "#000000",
                      }}>
                      1000.00/kg
                    </p>
                  </div>

                  <button className="add-btn mb-2">
                    <IoMdAdd size={24} />
                  </button>
                </div>
              </div>
            </article>
          </div>

          <div className="col-md-2 col-sm-2 col-lg-2 col-xl-2">
            <article className="gradient-container card-offer">
              <div class="header">
                {/* <div class="featureImg "></div> */}
                <div className="">
                  <img
                    src={picture}
                    className="img-fluid"
                    style={{
                      width: "500px",
                      height: "150px",
                    }}
                  />
                </div>
                <div class="flashSale">
                  <div class="flash">35%</div>
                  {/* <div class="sale">SALE</div> */}
                </div>
                <div class="shareBox">
                  <div class="closeBtn"></div>
                  <div class="copyLink">
                    <input
                      id="copyTarget"
                      type="text"
                      value="https://s.codepen.io/maxshine/debug/zKPzJX/"
                    />
                    <input id="copyLinkBtn" type="button" />
                    <label for="copyLinkBtn">Copy Link</label>
                  </div>
                </div>
              </div>
              <div class="body">
                <div className="item-des">
                  <p className="offerdes-name">Pork </p> &nbsp; &nbsp;
                  <s className="mt-2 offer-price">N2000.0</s>
                </div>
                <div className="card-footer">
                  <div className="item-des">
                    <s>N</s>
                    <p
                      style={{
                        color: "#000000",
                      }}>
                      1000.00/kg
                    </p>
                  </div>

                  <button className="add-btn mb-2">
                    <IoMdAdd size={24} />
                  </button>
                </div>
              </div>
            </article>
          </div>

          <div className="col-md-2 col-sm-2 col-lg-2 col-xl-2">
            <article className="gradient-container card-offer">
              <div class="header">
                {/* <div class="featureImg "></div> */}
                <div className="">
                  <img
                    src={picture}
                    className="img-fluid"
                    style={{
                      width: "500px",
                      height: "150px",
                    }}
                  />
                </div>
                <div class="flashSale">
                  <div class="flash">35%</div>
                  {/* <div class="sale">SALE</div> */}
                </div>
                <div class="shareBox">
                  <div class="closeBtn"></div>
                  <div class="copyLink">
                    <input
                      id="copyTarget"
                      type="text"
                      value="https://s.codepen.io/maxshine/debug/zKPzJX/"
                    />
                    <input id="copyLinkBtn" type="button" />
                    <label for="copyLinkBtn">Copy Link</label>
                  </div>
                </div>
              </div>
              <div class="body">
                <div className="item-des">
                  <p className="offerdes-name">Pork </p> &nbsp; &nbsp;
                  <s className="mt-2 offer-price">N2000.0</s>
                </div>
                <div className="card-footer">
                  <div className="item-des">
                    <s>N</s>
                    <p
                      style={{
                        color: "#000000",
                      }}>
                      1000.00/kg
                    </p>
                  </div>

                  <button className="add-btn mb-2">
                    <IoMdAdd size={24} />
                  </button>
                </div>
              </div>
            </article>
          </div>
        </div>
        <div className="view-allbtn mt-3">
          <button className="view-allbutton">VIEW ALL</button>
        </div>
      </div>
    </>
  );
};

export default OfferCard;
