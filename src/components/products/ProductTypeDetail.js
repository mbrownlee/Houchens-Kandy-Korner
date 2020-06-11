import React, { useEffect, useState } from "react";
import ProductManager from "../../modules/ProductManager";
import ProductCard from "./ProductCard";

const ProductTypeDetail = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    ProductManager.getByProductTypeId(props.match.params.productTypeId).then(
      (APIResults) => {
        setProducts(APIResults);
      }
    );
  }, []);
  return (
    <>
      <section className="section-content">
          
      </section>
      <div className="container-cards">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} {...props} />
        ))}
      </div>
    </>
  );
};
export default ProductTypeDetail;
