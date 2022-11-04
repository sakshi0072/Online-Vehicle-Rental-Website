import React from "react";
import "./css/Booking.css";

function Booking() {
  return (
    <div className="book-form">

      <h2>Booking Details</h2>

      <p>
        <b>Disclaimer:</b> If a vehicle is booked and arrives at your location,
        and you wish to cancel it,<br></br> you must pay Rs.500 for travel expenses.
      </p>
     
      <p>
        The fare will be determined on a <b>per-kilometer</b> basis.
      </p>

        <div className="book-element">
        <label><b>Number of Travellers: </b></label>
        <input type="number"  className="e1"></input><br></br>
        </div>

        <div className="book-element">
        <label><b>When you want: </b></label>
        <input type="date"  className="e1" /><br></br>
        </div>

        <div className="book-element">
        <label><b>Till when you want: </b></label>
        <input type="date" className="e1"  /><br></br>
        </div>

        <div className="book-element">
        <label><b>Contact No.: </b></label>
        <input type="text" className="e1"  /><br></br>
        </div>

        <button type="submit" id="submit">Submit</button>

    </div>
  );
}

export default Booking;