import { Route, Redirect } from "react-router-dom";
import React from "react";
import LocationList from "./locations/LocationList";
import EmployeeList from "./employees/EmployeeList";
import ProductTypeList from "./products/ProductTypeList";
import EmployeeCard from "./employees/EmployeeCard";

const ApplicationViews = () => {
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
        path="/productTypes"
        render={(props) => {
          return <ProductTypeList {...props} />;
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