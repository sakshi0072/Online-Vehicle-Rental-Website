import React, { useEffect, useState } from "react";
import "./css/VehicleInfo.css";
import axios from "axios";

function Login() {
  const [MyData, setMyData] = useState([]);
  useEffect(() => {
    // getVehicle();
    axios.get("http://localhost:8000/sign").then((res) => setMyData(res.data));
  }, []);
  console.log(MyData);
  const [Log, setLog] = useState({
    Email: "",
    Password: "",
  });
  let name, value;
  const handelinputsLog = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setLog({ ...Log, [name]: value });
  };

  const postDataLog = async (e) => {
    var i=0;
    e.preventDefault();
    MyData.map((Data) => {
        if(Log.Email == Data.Email ){
            i=1;
        }
    })
  };
    return (
    <>
      <div className="login bg-vi">
        <div className="container-vi">
          <h1>Login</h1>
          <label className="login-lbl">Email id</label>
          <input
            type="email"
            name="Email"
            id="name"
            className="login-lbl"
            placeholder="Enter Your Email Id"
            value={Log.Email}
            onChange={handelinputsLog}
          />
          <br />
          <label className="login-lbl">Password</label>
          <input
            type="password"
            name="Password"
            id="pass"
            className="login-lbl"
            placeholder="Enter password "
            value={Log.Password}
            onChange={handelinputsLog}
          />
          <br />
          <center>
          {/* <form method="GET"action="AboutUs.js"/> */}
            <input
              type="submit"
              name="submit"
              className="login-lbl"
              onClick={postDataLog}
            />
          </center>
        </div>
      </div>
    </>
  );
}

export default Login;
