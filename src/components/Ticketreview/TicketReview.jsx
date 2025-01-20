import React from "react";
import { Link, useLocation } from "react-router-dom";

const TicketReview = () => {
  const location = useLocation();
  const { selectedFlight } = location.state || {}; 

  if (!selectedFlight) {
    return <div>No flight selected</div>;
  }

  return (
    <div className="container mt-5">
      {/* <h2 className="bg-info m-1">Flight Details</h2> */}
      <table className="table table-striped border border-dark">
        <thead>
         <tr>
          <th colspan='2' style={{fontFamily:'cursive'}} className="fs-5">Flight Details</th>
         </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Airline</strong></td>
            <td>{selectedFlight.Airlines}</td>
          </tr>
          <tr>
            <td><strong>Flight Code</strong></td>
            <td>{selectedFlight.FlightCode}</td>
          </tr>
          <tr>
            <td><strong>From</strong></td>
            <td>{selectedFlight.FromPlace}</td>
          </tr>
          <tr>
            <td><strong>To</strong></td>
            <td>{selectedFlight.ToPlace}</td>
          </tr>
          <tr>
            <td><strong>Start Time</strong></td>
            <td>{selectedFlight.StartTime}</td>
          </tr>
          <tr>
            <td><strong>End Time</strong></td>
            <td>{selectedFlight.EndTime}</td>
          </tr>
          <tr>
            <td><strong>Class</strong></td>
            <td>{selectedFlight.Class}</td>
          </tr>
          <tr>
            <td><strong>Fare</strong></td>
            <td>{selectedFlight.Fare}</td>
          </tr>
        </tbody>
      </table>
      <Link to='/addpassenger' state = {{ selectedFlight }} className="btn btn-outline-dark">Passenger Details</Link>
    </div>
  );
};

export default TicketReview;
