import { Route } from "react-router-dom";
import React from "react";
import Login from "./auth/Login";
import LocationList from "./locations/LocationList";
import EmployeeList from "./employees/EmployeeList";
import ProductTypeList from "./products/ProductTypeList";
import ProductList from "./products/ProductList";
import ProductForm from "./products/ProductForm";
import ProductDetail from "./products/ProductDetail";
import ProductTypeDetail from "./products/ProductTypeDetail";

const ApplicationViews = (props) => {
  const hasUser = props.hasUser;
  const setUser = props.setUser;
  return (
    <React.Fragment>
      <Route
        exact
        path="/"
        render={(props) => {
          return <Login setUser={setUser} {...props} />;
        }}
      />

      <Route
        exact
        path="/productTypes"
        render={(props) => {
          return <ProductTypeList {...props} />;
        }}
      />
      <Route
        path="/productTypes/:productTypeId"
        render={(props) => {
          return <ProductTypeDetail {...props} />;
        }}
      />
      <Route
        exact
        path="/products"
        render={(props) => {
          return <ProductList {...props} />;
        }}
      />
      <Route
        exact
        path="/products/:productId(\d+)"
        render={(props) => {
          return (
            <ProductDetail
              productId={parseInt(props.match.params.productId)}
              {...props}
            />
          );
        }}
      />
      <Route
        path="/products/new"
        render={(props) => {
          return <ProductForm {...props} />;
        }}
      />
      <Route
        path="/products/:productId(\d+)/edit"
        render={(props) => {
          return <ProductForm {...props} />;
        }}
      />
      <Route
        path="/locations"
        render={(props) => {
          return <LocationList {...props} />;
        }}
      />
      <Route
        path="/employees"
        render={(props) => {
          return <EmployeeList {...props} />;
        }}
      />
    </React.Fragment>
  );
};

export default ApplicationViews;
