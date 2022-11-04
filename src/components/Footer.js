import React from "react";
import "./css/Footer.css";
import { IconContext } from "react-icons";
import { FaPhoneAlt } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { ImWhatsapp } from "react-icons/im";

import ftim from "./img/footimg.png";

function Footer() {
  return (
    <div className="foot">
      <img src={ftim}></img>
      <h1>Quality Services, Honesty and Reasonable Costs!</h1>

      <div className="foot-about">
        <h1>About Us</h1>
        <p>We want the users to get rental vehicles.</p>
      </div>

      <div className="foot-contact">
        <h1>Contact Us</h1>
        <p>
          <FaPhoneAlt />
          &nbsp;&nbsp;&nbsp;&nbsp;+91 9858641524
        </p>
        <p>
          <SiGmail />
          &nbsp;&nbsp;&nbsp;&nbsp;rentkar@gmail.com
        </p>
      </div>
      <hr></hr>
      <div className="foot-bt">
        <div className="facebook">
          <IconContext.Provider value={{ color: "white", size: 42 }}>
            <BsFacebook />
          </IconContext.Provider>
        </div>
        <div className="insta">
          <IconContext.Provider value={{ color: "white", size: 42 }}>
            <BsInstagram />
          </IconContext.Provider>
        </div>
        <div className="twit">
          <IconContext.Provider value={{ color: "white", size: 42 }}>
            <BsTwitter />
          </IconContext.Provider>
        </div>
        <div className="link">
          <IconContext.Provider value={{ color: "white", size: 42 }}>
            <BsLinkedin />
          </IconContext.Provider>
        </div>
        <div className="wp">
          <IconContext.Provider value={{ color: "white", size: 42 }}>
            <ImWhatsapp />
          </IconContext.Provider>
        </div>
      </div>
      <div className="foot-info">
        <h1>Information</h1>
        <a href="">About Us</a>
        <br></br>
        <a href="">Contact Us</a>
        <br></br>
        <a href="">Terms</a>
        <br></br>
        <a href="">About</a>
      </div>

      <div className="foot-help">
        <h1>Helpful Links</h1>
        <a href="">Services</a>
        <br></br>
        <a href="">Support</a>
        <br></br>
        <a href="">Policy</a>
        <br></br>
        <a href="">Know more</a>
      </div>
      <div className="foot-form1">
        <label className="foot-element">Name :</label>
        <input type="text" id="name" value="name"></input>
        <br></br>

        <label className="foot-element">Phone No. :</label>
        <input type="text" id="cn" value="cn"></input>
        <br></br>

        <label className="foot-element">Feedback :</label>
        <input type="text-area" id="feed" value="feed"></input>
        <br></br>
        <input type="submit" value="Submit" className="foot-submit" />
      </div>
    </div>
  );
}

export default Footer;