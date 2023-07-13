import React from "react";
import "./index.scss";
import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsTelegram,
  BsTelephoneOutboundFill,
  BsWhatsapp,
} from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";
// import { HiLocationMarker } from "react-icons/hi";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div id="footer">
      <div className="container">
        <div className="footer">
          <div className="footer--sing">
            <h1>Sign up for our newsletter</h1>
            <p>
              Be the first to know about our special offers, news, and updates.
            </p>
            <input type="text" placeholder="Email Address" />
            <button>Sign Up</button>
          </div>

          <div className="footer--sing__lorem">
            <div className="footer--sing__lorem--sum">
              <h1>Contact:</h1>
              <Link>
                <BsTelephoneOutboundFill /> +7 (999) 99 99 99
              </Link>
              <a className="footer--sing__lorem--sum__ic" href="#">
                <TfiEmail /> motionweb@gmail.com
              </a>
              <a href="tel:+996">
                <BsWhatsapp /> 0700 232 400
              </a>
            </div>
            <div className="footer--sing__lorem--sum">
              <h1>Address:</h1>
              <h2>Kyrgystan/Bishkek</h2>
              <Link>
                {/* <HiLocationMarker /> Turusbekova 109/3 */}
              </Link>
              <div className="footer--sing__lorem--sum__icons">
                <Link>
                  <BsLinkedin />
                </Link>
                <Link to="https://www.instagram.com/motion_web/">
                  <BsInstagram />
                </Link>
                <Link>
                  <BsFacebook />
                </Link>
                <Link>
                  <BsTelegram />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
