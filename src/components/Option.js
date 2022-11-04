import React from "react";
import { Link } from "react-router-dom";
import "./css/Option.css";
import user from "./img/User.png";
import vehicle from "./img/Vehicle.png";
function Option() {
  return (
    <>
      <div className="option">
        <h1 className="sign">Sign Up</h1>
        <div className="container-option">
          <Link to="/signup">
            <div className="user-option">
              <img src={user} alt="" />
              <p className="parauser">As A User</p>
            </div>
          </Link>
          <Link to="/signup">
            <div className="user-option">
              <img src={vehicle} alt="" />
              <p className="parauser1">As A Vehicle Uploader</p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Option;
