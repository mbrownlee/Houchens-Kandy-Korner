import React from "react";
import { Link } from "react-router-dom";

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

        {/* <Link to={`/locations/${props.locay.id}`}> */}
          {/* <button>Details</button>
        </Link>
        <button
          type="button"
          onClick={() =>
            props.history.push(`/location/${props.locay.id}/edit`)
          }
        >
          Edit
        </button> */}
      </div>
    </div>
  );
};

export default LocationCard;