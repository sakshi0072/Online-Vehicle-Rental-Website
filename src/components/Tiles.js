import React from "react";
import "./css/Tiles.css";
import c1 from "./img/c1.jpg";
import c2 from "./img/c2.jpg";
import c3 from "./img/c3.jpg";

const Tiles = () => {
  return (
    <>
      <div className="Tiles">
        <div className="Tile-card">
          <div className="Tile-image">
            <img src={c2} />
          </div>
          <div className="Tile-title">Flexible rentals</div>
          <div className="Tile-content">
            Cancel or change most bookings for free up to 48 hours before
            pick-up
          </div>
        </div>
        <div className="Tile-card">
          <div className="Tile-image">
            <img src={c1} />
          </div>
          <div className="Tile-title">No hidden fees</div>
          <div className="Tile-content">Know exactly what you’re paying</div>
        </div>
        <div className="Tile-card">
          <div className="Tile-image">
            <img src={c3} />
          </div>
          <div className="Tile-title">Price Match Guarantee</div>
          <div className="Tile-content">
            Found the same deal for less? We’ll match the price.
          </div>
        </div>
      </div>
    </>
  );
};

export default Tiles;
