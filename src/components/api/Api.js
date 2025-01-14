import axios from "axios";

// Set the base URL for the API
const BASE_URL = "http://localhost:8000";

// Create a reusable function for signup
export const signupUser = async (userData) => {
  try {
    const response = await axios.post(`${BASE_URL}/user/add`, userData);
    return response.data; // Return data from the response
  } catch (error) {
    if (error.response && error.response.data) {
      throw new Error(error.response.data.message || "Signup failed.");
    }
    throw new Error("An error occurred while signing up.");
  }
};

// You can add other API functions here, e.g., for login or fetching data
