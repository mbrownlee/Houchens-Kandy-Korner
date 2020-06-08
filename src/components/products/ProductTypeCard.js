import React from "react";
import { Link } from "react-router-dom";

const productTypeCard = (props) => {
  return (
    <div className="card">
      <div className="productTypeCard-content">
      <picture className="photo">
          <img src={require("./candy.jpeg")} alt="Candy" />
        </picture>
        <h2>
          {props.productType.name}
          </h2>

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

export default productTypeCard;
