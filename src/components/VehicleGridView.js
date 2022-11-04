import axios from "axios";
import {Link} from "react-router-dom"
import React, { useEffect, useState } from "react";
import carimg from "./img/logo.png"
import "./css/VehicleGridView.css";
function VehicleGridView() {
  const [MyData, setMyData] = useState([]);

  // const getVehicle = async () => {
  //   const res = await axios.get("http://localhost:8000/Vehicle");
  //   setMyData(res.data);
  // };
  // console.log(MyData)

  useEffect(() => {
    // getVehicle();
    axios
      .get("http://localhost:8000/Vehicle")
      .then((res) => setMyData(res.data));
  }, []);
  // })
  // console.log(MyData);

  MyData.map((out) => console.log(out.Type));
  
  // console.log(typeof MyData)
  return (
    <>
    
      {/* <div className="selection-bar">
        <label className="lbl-bar">Choose Your Vehicle Type :</label>
        <select name="" id="" className="slt-bar">
          <option value="select">Select</option>
          <option value="car">Car</option>
          <option value="truck">Truck</option>
          <option value="bike">Bike</option>
        </select>
      </div>
      <div className="Grid-Vehical">
        {} */}
        <div className="Card-Vehicle">
          {MyData.map((post) => {
            const { id, Type, Company, Model_n } = post;
            return (
              <div key={id} className="Vehicle-card">
                <div className="grid-img">
                <img src={carimg} alt="" />
                </div>
                <div className="grid-content">
                  <h3>Type :{'   '}{Type}</h3>
                  <h3>Company :{'   '}{Company}</h3>
                  <h3>Model :{'   '}{Model_n}</h3>
                </div>
                <center><Link to="/booking"><button id={id}>Book Now</button></Link></center>
              </div>
            );
          })}
        </div>
      {/* </div> */}
    </>
  );
}

export default VehicleGridView;
