import { Route, Redirect } from "react-router-dom";
import React from "react";
import Login from "./auth/Login";
import LocationList from "./locations/LocationList";
import EmployeeList from "./employees/EmployeeList";
import ProductTypeList from "./products/ProductTypeList";
import ProductList from "./products/ProductList";
import ProductDetail from "./products/ProductDetail";
import EmployeeCard from "./employees/EmployeeCard";

const ApplicationViews = (props) => {
  const hasUser = props.hasUser;
  const setUser = props.setUser;
  return (
    <React.Fragment>
      {/* <Route
          exact
          path="/"
          render={props => {
            return <Home />;
          }}
        /> */}
      <Route
        exact
        path="/"
        render={(props) => {
          return <Login setUser={setUser} {...props} />;
        }}
      />

      <Route
        path="/productTypes"
        render={(props) => {
          return <ProductTypeList {...props} />;
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
