import React, { useState, useEffect } from "react";
import EmployeeCard from "./EmployeeCard";
import EmployeeManager from "../../modules/EmployeeManager";
import "./Employee.css";

const EmployeeList = (props) => {
  const [employees, setEmployees] = useState([]);

  const getEmployees = () => {
    console.log(employees, "howdy");
    return EmployeeManager.getAll(employees).then((employeesFromAPI) => {
      setEmployees(employeesFromAPI);
    });
  };

  useEffect(() => {
    getEmployees();
  }, []);

  return (
    <>
      <div className="container-cards">
        {employees.map((employee) => (
          <EmployeeCard key={employee.id} employee={employee} {...props} />
        ))}
      </div>
    </>
  );
};
export default EmployeeList;
