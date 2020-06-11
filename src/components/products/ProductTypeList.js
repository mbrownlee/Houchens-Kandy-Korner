import React, { useState, useEffect } from "react";
import ProductTypeCard from "./ProductTypeCard";
import ProductTypeManager from "../../modules/ProductTypeManager";

const ProductTypeList = (props) => {
  const [productTypes, setProductTypes] = useState([]);

  const getProductTypes = () => {
    return ProductTypeManager.getAll().then((typesFromAPI) => {
      setProductTypes(typesFromAPI);
    });
  };

  useEffect(() => {
    getProductTypes();
  }, []);

  return (
    <>
    <h2>Click on Type of Candy to Display</h2>
      <div className="container-cards">
        {productTypes.map((productType) => (
          <ProductTypeCard
            key={productType.id}
            productType={productType}
          
            {...props}
          />
        ))}
      </div>
    </>
  );
};
export default ProductTypeList;
