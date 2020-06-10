import React, { useState, useEffect } from "react";
//import the components we will need
import ProductCard from "./ProductCard";
import ProductManager from "../../modules/ProductManager";
import "./ProductList.css"

const ProductList = (props) => {
  // The initial state is an empty array
  const [products, setProducts] = useState([]);

  const getProducts = () => {
    // After the data comes back from the API, we
    //  use the setAnimals function to update state
    return ProductManager.getAll().then((productsFromAPI) => {
      setProducts(productsFromAPI);
    });
  };
//   const deleteEmployee = (id) => {
//     EmployeeManager.delete(id).then(() =>
//       EmployeeManager.getAll().then(setEmployees)
//     );
//   };

  // got the animals from the API on the component's first render
  useEffect(() => {
    getProducts();
  }, []);

  // Finally we use map() to "loop over" the animals array to show a list of animal cards
  return (
    <>
       <section className="section-content">
        <button
          type="button"
          className="btn"
          onClick={() => {
            props.history.push("/products/new");
          }}
        >
          Add New Product
        </button>
      </section> 
      <div className="container-cards">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            // deleteEmployee={deleteEmployee}
            {...props}
          />
        ))}
      </div>
    </>
  );
};
export default ProductList;