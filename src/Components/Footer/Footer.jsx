import React from "react";
import "./Footer.css";
import logo from "../../Images/grocify-logo.png";
import socialmedia from "../../Images/socialmedia.png";

const Footer = () => {
  return (
    <div className="mt-5">
      <footer class="padding_4x">
        <div class="flex">
          <section class="flex-content padding_1x ">
            <img src={logo} className="footer-logo" />
            <div>
              <a className="footer-anchor">About</a>
              <a className="footer-anchor">Service</a>
              <a className="footer-anchor">Contact</a>
            </div>
          </section>
          <section class="flex-content padding_1x mt-5">
            <a
              className="footer-anchor"
              style={{
                fontWeight: "750",
              }}>
              Help
            </a>
            <a className="footer-anchor">Customer Support</a>
            <a className="footer-anchor">Delivery Details</a>
          </section>
          <section class="flex-content padding_1x">
            <h5 className="footer-anchor">Features</h5>
            <a className="footer-anchor">Jobs</a>
            <a className="footer-anchor">Brand Assets</a>
            <a className="footer-anchor">Investor Relations</a>
            <a className="footer-anchor">Terms of Service</a>
          </section>
          <section class="flex-content padding_1x mt-5 mobile">
            <h5 className="footer-anchor">Get Connected</h5>
            <a className="footer-anchor">
              Join the conversation on social media and stay connected with our
              latest products and Services.
            </a>
            {/* <a className="footer-anchor">Research</a>
            <a className="footer-anchor">Experts</a>
            <a className="footer-anchor">Agencies</a> */}
          </section>
          <section class="flex-content padding_1x mt-5">
            <h5 className="footer-anchor">Stay informed</h5>
            <p className="footer-anchor">
              Subscribe to our notification to receive updates of new products
              and services.
            </p>
            <span className="subscribe">Subscribe</span>
          </section>
        </div>
        <div class="flex">
         
          <section class="flex-content padding_1x">
           <img
          src={socialmedia}
          className="socialmedia-icons socialmediaicon-mobileview"
           />
          </section>
          
        </div>
        <section class="flex-content padding_1x">
            <p>Copyright ©2023 All rights reserved || Grocify </p>
          </section>
      </footer>
    </div>
  );
};

export default Footer;
