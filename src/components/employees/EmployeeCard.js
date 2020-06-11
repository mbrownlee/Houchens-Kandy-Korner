import React from "react";

const EmployeeCard = (props) => {
  return (
    <div className="card">
      <div className="employeeCard-content">
        <h2>
          Employee First Name:{" "}
          <span className="employeeCard-firstName">
            {props.employee.firstName}
          </span>
        </h2>
        <h3>
          Last Name:{" "}
          <span className="employeeCard-lastName">
            {props.employee.lastName}
          </span>
        </h3>
        <h3>
          Phone Number:{" "}
          <span className="employeeCard-phone">{props.employee.phone}</span>
        </h3>
        <p>
          Address:{" "}
          <span className="employeeCard-address">{props.employee.address}</span>
        </p>
      </div>
    </div>
  );
};

export default EmployeeCard;
