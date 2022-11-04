import React, {useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./css/VehicleInfo.css";

function Signup() {
  const [Sign, setSign] = useState({
    Name: "",
    Email:"",
    Phone: "",
    Password: "",
  });
  let name, value;
  const handelinputsSign = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setSign({ ...Sign, [name]: value });
  };

  const postDataSign = async (e) => {
    e.preventDefault();

    const { Name, Email, Phone,Password } = Sign;

    console.log(Sign);
    axios
      .post("http://localhost:8000/sign", Sign)
      .then(function (response) {
        console.log(response);
      });
    
  };
  return (
    <>
      <div className="signup bg-vi">
        <div className="container-vi">
          <h1>Sign Up</h1>
          <label>Name</label> <br />
          <input
            type="text"
            name="Name"
            id="name"
            placeholder="Enter Your Full Name"
            value={Sign.Name}
            onChange={handelinputsSign}
          />{" "}
          <br />
          <label>Email id</label> <br />
          <input
            type="email"
            name="Email"
            id="name"
            placeholder="Enter Your Email Id"
            value={Sign.Email}
            onChange={handelinputsSign}
          />
          <br />
          <label className="lbl">Ph. Number:</label> <br />
          <input
            type="number"
            name="Phone"
            placeholder="Enter Your Contact Number"
            value={Sign.Phone}
            onChange={handelinputsSign}
          />{" "}
          <br />
          <label>Password</label> <br />
          <input
            type="password"
            name="Password"
            id="pass"
            placeholder="Enter password "
            value={Sign.Password}
            onChange={handelinputsSign}
          />
          <br />
          <p>
            *Your password should Include lower-case letter
            Include upper-case letter Include numbers Include symbols{" "}
          </p>
          <center><Link onClick={postDataSign} to="/login"><input type="submit" name="submit"/></Link></center>
        </div>
      </div>
    </>
  );
}

export default Signup;