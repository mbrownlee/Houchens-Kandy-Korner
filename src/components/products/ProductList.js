import React, { useState, useEffect } from "react";
//import the components we will need
import ProductCard from "./ProductCard";
import ProductManager from "../../modules/ProductManager";
import "./ProductList.css";

const ProductList = (props) => {
  // The initial state is an empty array
  const [products, setProducts] = useState([]);

  const getProducts = () => {
    return ProductManager.getAll().then((productsFromAPI) => {
      setProducts(productsFromAPI);
    });
  };

  useEffect(() => {
    getProducts();
  }, []);

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
          <ProductCard key={product.id} product={product} {...props} />
        ))}
      </div>
    </>
  );
};
export default ProductList;
