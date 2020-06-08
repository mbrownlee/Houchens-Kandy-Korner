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
//   const deleteLocation = (id) => {
//     LocationManager.delete(id).then(() =>
//       LocationManager.getAll().then(setLocations)
//     );
//   };

  // got the animals from the API on the component's first render
  useEffect(() => {
    getProductTypes();
  }, []);

 
  return (
    <>
      <div className="container-cards">
        {productTypes.map((productType) => (
          <ProductTypeCard
            key={productType.id}
            productType={productType}
            // deleteLocation={deleteLocation}
            {...props}
           
           
          />
        ))}
      </div>
      {/* <section className="section-content">
        <button
          type="button"
          className="btn"
          onClick={() => {
            props.history.push("/location/new");
          }}
        >
          New Location
        </button>
      </section> */}
    </>
  );
};
export default ProductTypeList;