import React from "react";
import { Link } from "react-router-dom";

const productCard = (props) => {
  return (
    <div className="card">
      <div className="productCard-content">
 
        <h2>
          {props.product.name}
          </h2>
          {/* <h3>
              {props.product.productType}
          </h3> */}

          <Link to={`/products/${props.product.id}`}>
          <button>Details</button>
        </Link>
        {/* <button
          type="button"
          onClick={() =>
            props.history.push(`/products/${props.product.id}/edit`)
          }
        >
          Edit
        </button>  */}
      </div>
    </div>
  );
};

export default productCard;