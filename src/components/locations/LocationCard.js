import React from "react";


const LocationCard = (props) => {
  return (
    <div className="card">
      <div className="locationCard-content">
        <h2>
          {props.locay.name}
          <br />
          <small>One of 3 sweet Houchens' stores to serve you.</small>
        </h2>
        <address>
          {props.locay.address}
          <br />
          {props.locay.phone}
        </address>
      </div>
    </div>
  );
};

export default LocationCard;
