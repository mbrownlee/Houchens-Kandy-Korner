import React, { useState, useEffect } from "react";
import ProductManager from "../../modules/ProductManager";
import ProductTypeManager from "../../modules/ProductTypeManager";

  const ProductDetail = props => {
    const [product, setProduct] = useState({});
    const [productTypes, setProductTypes] = useState([]);
  
    useEffect(() => {
     
      ProductManager.getWithProductType(props.match.params.productId)
        .then(APIResult => {
            console.log(APIResult, "what you want")
          setProduct(APIResult);
          setProductTypes(APIResult.productTypes);
        });
    }, [props.match.params.productId]);

  const handleDelete = () => {
   
    ProductManager.delete(props.productId).then(() =>
      props.history.push("/products")
    );
  };

  return (
    <div className="card">
      <div className="card-content">
        <h1>
          Name: {product.name}
        </h1>
        <h3>Price: {product.price}</h3>
        <p>Type of Candy: {product.productType} </p>
        <button
          type="button"
          onClick={() => props.history.push(`/products/${product.id}/edit`)}
        >
          Edit Product
        </button>

        <button type="button" onClick={handleDelete}>
          Delete Product
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;