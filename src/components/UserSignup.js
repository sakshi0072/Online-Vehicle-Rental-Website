import React from 'react'
import "./css/log.css";

function SignUp() {
  return (
    <div className="container">
        <form>
      <div className="form-control">
        <input type="text" required />
        <label>Name</label>
      </div>
      <div className="form-control">
        <input type="text" required />
        <label>Phone No.</label>
      </div>
      <div className="form-control">
        <input type="text" required />
        <label>Email ID</label>
      </div>
      <div className="form-control">
        <input type="text" required />
        <label>Address</label>
      </div>
      <p className="next"><input type="button" value="Create Account"></input></p>
    </form>
    </div>
  )
}

export default SignUp