import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./css/VehicleInfo.css";

function Login() {
  const [MyData, setMyData] = useState([]);
  const [Log, setLog] = useState({
    Email: "",
    Password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Fetch user data on component mount
  useEffect(() => {
    axios.get("http://localhost:8000/sign").then((res) => setMyData(res.data));
  }, []);

  const handleInputsLog = (e) => {
    const { name, value } = e.target;
    setLog({ ...Log, [name]: value });
  };

  const postDataLog = (e) => {
    e.preventDefault();

    // Check user credentials
    const user = MyData.find(
      (user) => user.Email === Log.Email && user.Password === Log.Password
    );

    if (user) {
      alert("Login successful!");
      navigate("/vehicle"); // Navigate to /vehicle route
    } else {
      setError("Invalid email or password.");
    }
  };

  return (
    <div className="login bg-vi">
      <div className="container-vi">
        <h1>Login</h1>
        {error && <p className="error-msg">{error}</p>}
        <form onSubmit={postDataLog}>
          <label className="login-lbl">Email ID</label>
          <input
            type="email"
            name="Email"
            className="login-lbl"
            placeholder="Enter Your Email ID"
            value={Log.Email}
            onChange={handleInputsLog}
          />
          <br />
          <label className="login-lbl">Password</label>
          <input
            type="password"
            name="Password"
            className="login-lbl"
            placeholder="Enter Password"
            value={Log.Password}
            onChange={handleInputsLog}
          />
          <br />
          <center>
            <button type="submit" className="login-btn">
              Login
            </button>
          </center>
        </form>
      </div>
    </div>
  );
}

export default Login;
