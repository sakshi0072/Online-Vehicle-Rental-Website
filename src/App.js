import React from "react";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import VehicleInfo from "./components/VehicleInfo";
import "bootstrap/dist/css/bootstrap.min.css";
import Upload from "./components/Upload";
import Option from "./components/Option";
import VehicleGridView from "./components/VehicleGridView";
import { Route, Routes } from "react-router-dom";
import Booking from "./components/Booking";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Vsignup from "./components/Vsignup";
import Vlogin from "./components/Vlogin";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/optlog" element={<Option />} />
        <Route path="/vehicleinfo" element={<VehicleInfo />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/vehicle" element={<VehicleGridView />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Vsignup" element={<Vsignup />} />
        <Route path="/Vlogin" element={<Vlogin />} />
      </Routes>
    </>
  );
};

export default App;
