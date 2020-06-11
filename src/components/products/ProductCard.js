import React from "react";
import { Link } from "react-router-dom";

const productCard = (props) => {
  return (
    <div className="card">
      <div className="productCard-content">
        <h2>{props.product.name}</h2>

        <Link to={`/products/${props.product.id}`}>
          <button>Details</button>
        </Link>
      </div>
    </div>
  );
};

export default productCard;
