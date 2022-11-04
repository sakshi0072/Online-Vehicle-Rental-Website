import React, { useState } from "react";
import axios from "axios";
// import { Helmet } from "react-helmet";
import "./css/DriverInfo.css";

function DriverInfo() {
  const [driver, setDriver] = useState({
    Name: "",
    Address_1: "",
    Address_2: "",
    Address_3: "",
    Email: "",
    Phone: "",
    Dob: "",
    Gender: "",
    Addhar: "",
    DrivingLic: "",
    Experience: "",
    Photo: "",
  });
  let name, value;
  const handelinputsDri = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setDriver({ ...driver, [name]: value });
  };

  const postDataDri = async (e) => {
    e.preventDefault();

    const {
      Name,
      Address_1,
      Address_2,
      Address_3,
      Email,
      Phone,
      Dob,
      Gender,
      Addhar,
      DrivingLic,
      Experience,
    } = driver;

    console.log(driver);
    axios
      .post("http://localhost:8000/drivers", driver)
      .then(function (response) {
        console.log(response);
      });
  };


  return (
    <>
      <form method="POST" encType="multipart/from-data">
        <div className="personal-info">
          <fieldset>
            <legend>Personal Information</legend>
            <label className="lbl">Name:</label>
            <input
              type="text"
              name="Name"
              value={driver.Name}
              onChange={handelinputsDri}
            />

            <br />
            <label className="lbl">Address 1</label>
            <input
              type="text"
              name="Address_1"
              value={driver.Address_1}
              onChange={handelinputsDri}
            ></input>
            <br />

            <label className="lbl">Address 2</label>
            <input
              type="text"
              name="Address_2"
              value={driver.Address_2}
              onChange={handelinputsDri}
            ></input>
            <br />

            <label className="lbl">Address 3</label>
            <input
              type="text"
              name="Address_3"
              value={driver.Address_3}
              onChange={handelinputsDri}
            ></input>
            <br />

            <label className="lbl">Email</label>
            <input
              type="email"
              name="Email"
              value={driver.Email}
              onChange={handelinputsDri}
            ></input>
            <br />

            <label className="lbl">Ph. Number:</label>
            <input
              type="number"
              name="Phone"
              value={driver.Phone}
              onChange={handelinputsDri}
            />
            <br />

            <label className="lbl">Date of Birth:</label>
            <input
              type="date"
              name="Dob"
              value={driver.Dob}
              onChange={handelinputsDri}
            />
            <br />

            <label className="lbl">Gender</label>
            <select
              name="Gender"
              value={driver.Gender}
              onChange={handelinputsDri}
            >
              <option value="select">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            <br />
          </fieldset>
        </div>
        <div className="professional-info">
          <h1>Professional Information</h1>
          <label className="lbl">Addhar Card No</label>
          <input
            type="number"
            name="Addhar"
            id="addhar"
            value={driver.Addhar}
            onChange={handelinputsDri}
          />
          <br />
          <label className="lbl">Driving License</label>
          <input
            type="text"
            name="DrivingLic"
            id="license"
            value={driver.DrivingLic}
            onChange={handelinputsDri}
          />
          <br />
          <label className="lbl">Experience as a driver</label>
          <input
            type="number"
            name="Experience"
            id="eyear"
            value={driver.Experience}
            onChange={handelinputsDri}
          />
          <br />
        </div>
        
        <div className="review">
          <h1>Review</h1>
        </div>
      </form>
    </>
  );
}

export default DriverInfo;
