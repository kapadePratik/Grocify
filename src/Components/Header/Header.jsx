import React, { useState } from "react";
import "./Header.css";
import $ from "jquery";
import backgroundimg from "../../Images/headerbackground.png";
import Logo from "../../Images/grocify-logo.png";
import roundcircle from "../../Images/roundcircle.png";
import transimg from "../../Images/transimg.png";
import grocerypng from "../../Images/grocery-png.png";
import { FaCartShopping } from "react-icons/fa6";
import { IoIosContact } from "react-icons/io";
import { FcAbout } from "react-icons/fc";
import { RiContactsFill } from "react-icons/ri";

$(window).on("scroll", function () {
  if ($(window).scrollTop()) {
    $("nav").addClass("black");
  } else {
    $("nav").removeClass("black");
  }
});
/*menu button onclick function*/ $(document).ready(function () {
  $(".menu h4").click(function () {
    $("nav ul").toggleClass("active");
  });
});

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  return (
    <>
      <div className="container-fluid p-0 m-0 header-background">
        <nav class="navbar navbar-expand-lg navbar-light  grocify-nav  navbar-desktopview">
          <div class="container">
            <a class="navbar-brand">
              <img src={Logo} width="100vw" />
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              onClick={toggleSidebar}
              aria-label="Toggle navigation">
              {sidebarOpen ? (
                <span class="btn-close" aria-label="Close"></span>
              ) : (
                <span class="navbar-toggler-icon"></span>
              )}
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
                <ul
                  class={`${
                    sidebarOpen
                      ? "navbar-nav"
                      : "navbar-nav me-auto mb-2 mb-lg-0 ms-5"
                  }`}>
                  <li class="nav-item">
                    <a href="" class="nav-link">
                      <input
                        class="form-control me-2 w-100 "
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                      />
                    </a>
                  </li>

                  <li class="nav-item">
                    <a
                      class="nav-link active mobileview-name"
                      aria-current="page"
                      // className="nav-text ms-5 desktopview"
                      className="nav-text ms-5 d-flex justify-content-center">
                      <IoIosContact className="navbar-icons" size={27} />
                      &nbsp; Home
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link active"
                      aria-current="page"
                      // className="nav-text ms-5 desktopview"
                      className="nav-text ms-5 d-flex justify-content-center">
                      <FcAbout className="navbar-icons" size={27} />
                      &nbsp; About
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link active"
                      aria-current="page"
                      // className="nav-text ms-5 desktopview"
                      className="nav-text ms-5 d-flex justify-content-center">
                      <RiContactsFill className="navbar-icons" size={27} />
                      &nbsp; Contact
                    </a>
                  </li>

                  <li class="nav-item cart-logo-mobileview">
                    <a
                      class="nav-link active"
                      aria-current="page"
                      // className="nav-text ms-5 desktopview"
                      className="nav-text ms-5 d-flex justify-content-center mt-2">
                      <FaCartShopping />
                    </a>
                  </li>

                  {sidebarOpen ? (
                    <div className="button-group">
                      <a href="" class="nav-link">
                        <button class="header-button">LogIn</button>
                      </a>
                      <a href="" class="nav-link">
                        <button class="header-button1">Register</button>
                      </a>
                    </div>
                  ) : (
                    <>
                      <li class="nav-item">
                        <a href="" class="nav-link">
                          <button class="header-button custom-button">
                            LogIn
                          </button>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="" class="nav-link">
                          <button class="header-button custom-button">
                            Register
                          </button>
                        </a>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </nav>
        <div className="content"></div>
        <div className="image-container ms-5">
          <img src={roundcircle} alt="Left Image" className="left-image" />
          <div className="text-overlay  mobile-device">
            <h1>Buy your groceries and</h1>
            <h1 className="d-flex justify-content-start">have it delivered</h1>
            <h1>to your doorstep with</h1>
            <h1>ease</h1>
          </div>

          <img
            src={transimg}
            alt="Right Image"
            className="right-image mb-5 me-12"
            style={{
              marginRight: "105px",
            }}
          />
          <img
            src={grocerypng}
            alt="Bottom Right Image"
            className="bottom-right-image"
            style={{
              marginTop: "105px",
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Header;
