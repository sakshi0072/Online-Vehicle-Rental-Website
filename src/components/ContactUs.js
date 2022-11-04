import React from "react";
import Navbar from "./Navbar";
import "./css/ContactUs.css";
import contact from "./img/ContactUs.png"

function ContactUs() {
  return (
    <>
    <Navbar/>
      <div className="contact-Header">
        <img src={contact} alt="" />
        <h1>Contact Us</h1>
      </div>
      <div className="contact-map">
        <center>
          <iframe
            width="1200"
            height="400"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            id="gmap_canvas"
            src="https://maps.google.com/maps?width=1080&amp;height=500&amp;hl=en&amp;q=St.%20John%20College%20of%20Engineering%20palghar+(St%20Jhon%20College%20of%20Engineering%20and%20Managment,%20Palghar)&amp;t=k&amp;z=18&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
        </center>

        <div className="contact-info">
            <div className="info1">
            <h1>Visit Us</h1><br/>
            <p>We have various outlets located across, </p>
            <p>all the major cities of India.</p>
            </div>

            <div className="info2">
            <h1>Call Us</h1><br/>
            <p>Our customer care team is always</p>
            <p>ready to attend to your rental needs.</p>
            <a href="">+91 9846925872</a>
            </div>

            <div className="info3">
            <h1>Contact Us</h1><br/>
            <p>Drop us an email if you have an</p>
            <p>enquiry.</p>
            <p>rentkar@gmail.com</p>
            </div>

        </div>

        <div className="contact-form">

            <input type="text" className="name" placeholder="Name"></input><br/>

            <input type="tel" className="name" placeholder="Phone No"></input><br/>

            <input type="email" className="name" placeholder="Enter your e-mail"></input><br/>

            <textarea  name="comment" form="question" placeholder="Question"></textarea><br/>

            <button type="submit" id="sub">Send</button>

        </div>

      </div>
    </>
  );
}

export default ContactUs;