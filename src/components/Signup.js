import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./css/VehicleInfo.css";
import { signupUser } from "../components/api/Api"; // Import the API function

function Signup() {
  const [Sign, setSign] = useState({
    Name: "",
    Email: "",
    Phone: "",
    Password: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleInputsSign = (e) => {
    const { name, value } = e.target;
    setSign({ ...Sign, [name]: value });
  };

  const validateForm = () => {
    const { Name, Email, Phone, Password } = Sign;

    // Validate name
    if (!Name) return "Name is required.";

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!Email || !emailRegex.test(Email)) return "Invalid email format.";

    // Validate phone number
    const phoneRegex = /^\d{10}$/;
    if (!Phone || !phoneRegex.test(Phone))
      return "Invalid phone number. Use a 10-digit number.";

    // Validate password
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!Password || !passwordRegex.test(Password)) {
      return "Password must include at least 8 characters, one uppercase, one lowercase, one number, and one symbol.";
    }

    return null; // No errors
  };

  const postDataSign = async (e) => {
    e.preventDefault();

    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    try {
      // Call the signup API
      const response = await signupUser(Sign);
      setSuccess("Signup successful! Redirecting to login...");
      setError(""); // Clear previous errors
      setTimeout(() => navigate("/login"), 2000); // Redirect after 2 seconds
    } catch (err) {
      console.error(err);
      setError(err.message || "An error occurred during signup.");
      setSuccess("");
    }
  };

  return (
    <div className="signup bg-vi">
      <div className="container-vi">
        <h1>Sign Up</h1>
        {error && <p className="error-msg">{error}</p>}
        {success && <p className="success-msg">{success}</p>}
        <form onSubmit={postDataSign}>
          <label>Name</label> <br />
          <input
            type="text"
            name="Name"
            placeholder="Enter Your Full Name"
            value={Sign.Name}
            onChange={handleInputsSign}
          />
          <br />
          <label>Email</label> <br />
          <input
            type="email"
            name="Email"
            placeholder="Enter Your Email"
            value={Sign.Email}
            onChange={handleInputsSign}
          />
          <br />
          <label>Phone</label> <br />
          <input
            type="tel"
            name="Phone"
            placeholder="Enter Your Contact Number"
            value={Sign.Phone}
            onChange={handleInputsSign}
          />
          <br />
          <label>Password</label> <br />
          <input
            type="password"
            name="Password"
            placeholder="Enter Password"
            value={Sign.Password}
            onChange={handleInputsSign}
          />
          <p>
            *Your password should include at least 8 characters, one uppercase
            letter, one lowercase letter, one number, and one symbol.
          </p>
          <button type="submit">Sign Up</button>
        </form>
        <p>
          Already have an account? <Link to="/login">Log In</Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
