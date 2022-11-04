import React from "react";
import "./css/AboutUs.css";
import Navbar from "./Navbar";
import aboutimg from "./img/Aboutus.png";

function AboutUs() {
  return (
    <>
      <Navbar />
      <div className="ab-img">
        <img src={aboutimg} />
        <div className="ab-content">
          <p>
            We are not vehicle rental companies that promise inexpensive prices
            but then make you wait in large lines in front of a desk where one
            person has to handle all the arrivals, causing you extra delays in
            getting on the road to your destination. Our principle is
            straightforward: the client comes first. Our expert team is always
            available to assist clients in resolving any issues in a polite and
            fast manner. Furthermore, because we do not utilise brokers, we do
            not have to pay excessive commissions, which would be passed on to
            the consumer, allowing us to really deliver low-cost vehicle hiring.
            Remember, all of our vehicles are brand new! When it comes to
            renting a vehicle, we are always ready to save our clients time and
            money. We provide the greatest pricing in this concept, but we do
            not feel that clients should expect less simply because they spend
            less.
          </p>

          <h1>Quality services, honesty, and reasonable costs!</h1>
        </div>
      </div>
    </>
  );
}

export default AboutUs;