import React, { useState, useEffect } from "react";
import ProductManager from "../../modules/ProductManager";
import ProductTypeManager from "../../modules/ProductTypeManager";
import "./ProductDetail.css";

const ProductDetail = (props) => {
  const [product, setProduct] = useState({ productType: {} });
  const [productTypesWithLocation, setProductTypesWithLocation] = useState([]);

  useEffect(() => {
    ProductManager.getWithProductType(props.match.params.productId).then(
      (APIResult) => {
        console.log(APIResult, "what you want");
        setProduct(APIResult);
      }
    );
  }, [props.match.params.productId]);

  useEffect(() => {
    ProductTypeManager.getByProduct(props.match.params.productId).then(
      (APIResult) => {
        setProductTypesWithLocation(APIResult);
      }
    );
  }, [props.match.params.prodctId]);
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
        <p>
          Locations Sold:{" "}
          {productTypesWithLocation
            .map((productTypeWithLocation) => {
              return productTypeWithLocation.location.name;
            })
            .join(", ")}
        </p>

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
