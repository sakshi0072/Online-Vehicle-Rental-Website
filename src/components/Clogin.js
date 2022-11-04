import React from "react";
import "./css/log.css";

function CLogin() {
  return (
    <div>
      <h1>Sign In</h1>
      <form>
        <div className="form-control">
          <input type="text" required />
          <label>Username</label>
        </div>

        <div className="form-control">
          <input type="password" required />

          <label>Your Password</label>
        </div>

        <button className="btn">Submit</button>
        <p className="text">
          Don't have an account?
          <a href="#">Create Account</a>
        </p>
      </form>
    </div>
  );
}

export default CLogin;
