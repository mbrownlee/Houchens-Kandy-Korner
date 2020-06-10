import React, { useState, useEffect } from "react";
import ProductManager from "../../modules/ProductManager";
import ProductTypeManager from "../../modules/ProductTypeManager";
import "./ProductForm.css";

const ProductForm = (props) => {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    productTypeId: "",
  });
  const [productTypes, setProductTypes] = useState([]);

  const getProductTypes = () => {
    return ProductTypeManager.getAll().then((productTypes) => {
      setProductTypes(productTypes);
    });
  };
  useEffect(() => {
    getProductTypes();
  }, []);

  const handleFieldChange = (evt) => {
    const stateToChange = { ...product };
    stateToChange[evt.target.id] = evt.target.value;
    setProduct(stateToChange);
  };

  const constructNewProduct = (evt) => {
    if (
      product.name === "" ||
      product.price === "" ||
      product.productTypeId === ""
    ) {
      window.alert("Please input name and price");
    } else {
      ProductManager.post(product).then(() => props.history.push("/products"));
    }
  };
  const editedProduct = {
    id: props.match.params.productId,
    name: product.name,
    price: product.price,
    productTypeId: parseInt(product.productTypeId),
  };
  const updateExistingProduct = (evt) => {
    ProductManager.update(editedProduct).then(() =>
      props.history.push("/products")
    );
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (props.match.params.productId) {
      updateExistingProduct(editedProduct);
    } else if (!props.match.params.productId) {
      constructNewProduct();
    }
  };
  useEffect(() => {
    if (props.match.params.productId) {
      ProductManager.get(props.match.params.productId).then(setProduct);
    }
  }, [props.match.params.productId]);
  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="name"
              placeholder="Product name"
              value={product.name}
            />
            <label htmlFor="name">Name</label>
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="price"
              placeholder="Price"
              value={product.price}
            />
            <label htmlFor="price">Price</label>
            <select
              value={product.productTypeId}
              id="productTypeId"
              onChange={handleFieldChange}
            >
              <option value="">Type of Candy</option>
              {productTypes.map((productType) => (
                <option key={productType.id} value={productType.id}>
                  {productType.name}
                </option>
              ))}
            </select>
          </div>
          <div className="alignRight">
            <button type="button" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default ProductForm;
