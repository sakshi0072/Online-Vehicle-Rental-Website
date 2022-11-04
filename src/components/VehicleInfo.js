import React, { useState } from "react";
import axios from "axios";

import "./css/VehicleInfo.css";

function VehicleInfo() {
  const [Vehicle, setVehicle] = useState({
    Type: "",
    Company:"",
    Model_n: "",
    Purchased: "",
    Distance: "",
    Plate: "",
    Color: "",
  });
  let name, value;
  const handelinputsCar = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setVehicle({ ...Vehicle, [name]: value });
  };

  const postDataCar = async (e) => {
    e.preventDefault();

    const { Type, Model_n, Purchased, Distance, Plate, Color } = Vehicle;

    console.log(Vehicle);
    axios
      .post("http://localhost:8000/Vehicle", Vehicle)
      .then(function (response) {
        console.log(response);
      });
  };

  return (
    <>
      <div className="bg-vi">
        <form>
          <div className="container-vi">
              <div className="pi-vi">
                <h1>Vehicle Information</h1>
                <label className="lbl-vi">Type of Vehicle</label> <br />
                <select name="Type" value={Vehicle.Type}
              onChange={handelinputsCar} >
                  <option value="Select" className="select-vi">
                    Select
                  </option>
                  <option value="Car" className="select-vi">
                    Car
                  </option>
                  <option value="Bike" className="select-vi">
                    Bike
                  </option>
                  <option value="Mini-bus" className="select-vi">
                    Mini-Bus
                  </option>
                  <option value="Truck" className="select-vi">
                    Truck
                  </option>
                </select>
                <br />
                <label  className="lbl-vi">Vehicle Company</label><br/>
                <input
                  type="text"
                  name="Company"
                  id="company-name"
                  placeholder="(eg. Honda Suzuki Tata)"
                  value={Vehicle.Company}
                  onChange={handelinputsCar}
                /><br/>
                <label className="lbl-vi">Model Name</label> <br />
                <input
                  type="text"
                  name="Model_n"
                  id="model-name"
                  placeholder="model-name"
                  value={Vehicle.Model_n}
                  onChange={handelinputsCar}
                />
                <br />
                <label className="lbl-vi">When vehicle was purchased?</label>{" "}
                <br />
                <input type="text" name="name" placeholder="year" />
                <br />
                <label className="lbl-vi">Number Plate</label> <br />
                <input
                  type="text"
                  name="Plate"
                  id="no-plate"
                  placeholder="no-plate"
                  value={Vehicle.Plate}
                  onChange={handelinputsCar}
                />
                <br />
                <label className="lbl-vi">Distance Covered</label> <br />
                <input
                  type="text"
                  name="Distance"
                  id="dis-cover"
                  placeholder="in kms"
                  value={Vehicle.Distance}
                  onChange={handelinputsCar}
                ></input>
                <br />
                <label className="lbl-vi">Vehicle color</label> <br />
                <input
                  type="text"
                  name="Color"
                  id="color"
                  value={Vehicle.Color}
                  onChange={handelinputsCar}
                />
                <br />
                <input type="submit" name="Submit" onClick={postDataCar} id="sb" />
              </div>
            </div>
        </form>
      </div>
    </>
  );
}

export default VehicleInfo;
