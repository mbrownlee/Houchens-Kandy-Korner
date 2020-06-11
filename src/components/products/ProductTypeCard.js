import React from "react";
import "./ProductType.css";

const productTypeCard = (props) => {
  return (
    <div className="card">
      <div className="productTypeCard-content">
        <button
          className="type_btn"
          onClick={() => {
            props.history.push(`/productTypes/${props.productType.id}`);
          }}
        >
          {props.productType.name}
        </button>
      </div>
    </div>
  );
};

export default productTypeCard;
