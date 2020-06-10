import React, { useState, useEffect } from "react";
import ProductManager from "../../modules/ProductManager";
import ProductTypeManager from "../../modules/ProductTypeManager";
import "./ProductDetail.css";

const ProductDetail = (props) => {
  const [product, setProduct] = useState({ productType: {} });
  // const [productTypes, setProductTypes] = useState([]);

  useEffect(() => {
    ProductManager.getWithProductType(props.match.params.productId).then(
      (APIResult) => {
        console.log(APIResult, "what you want");
        setProduct(APIResult);
        //   setProductTypes(APIResult.productType);
      }
    );
  }, [props.match.params.productId]);

  const handleDelete = () => {
    ProductManager.delete(props.productId).then(() =>
      props.history.push("/products")
    );
  };


  return (
    <div className="card">
      <div className="card-content">
        <h1>{product.name}</h1>
        <h3>Price: {product.price}</h3>
        <p>Type of Candy: {product.productType.name} </p>
        {/* <p>Locations Sold: {product.location.name}</p> */}
        <div className="edit">
          <button
            type="button"
            onClick={() => props.history.push(`/products/${product.id}/edit`)}
          >
            Edit Product
          </button>
        </div>
        <div className="delete">
          <button type="button" onClick={handleDelete}>
            Delete Product
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
