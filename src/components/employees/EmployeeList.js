import React, { useState, useEffect } from "react";
import EmployeeCard from "./EmployeeCard";
import EmployeeManager from "../../modules/EmployeeManager";
import "./Employee.css"

const EmployeeList = (props) => {
  // The initial state is an empty array
  const [employees, setEmployees] = useState([]);

  const getEmployees = () => {
    // After the data comes back from the API, we
    //  use the setAnimals function to update state
    console.log(employees, "howdy")
    return EmployeeManager.getAll(employees).then((employeesFromAPI) => {
      setEmployees(employeesFromAPI);
    });
  };
//   const deleteEmployee = (id) => {
//     EmployeeManager.delete(id).then(() =>
//       EmployeeManager.getAll().then(setEmployees)
//     );
//   };

  useEffect(() => {
    getEmployees();
  }, []);

  return (
    <>
      <div className="container-cards">
        {employees.map((employee) => (
          <EmployeeCard
            key={employee.id}
            employee={employee}
            // deleteEmployee={deleteEmployee}
            {...props}
          />
        ))}
      </div>
      {/* <section className="section-content">
        <button
          type="button"
          className="btn"
          onClick={() => {
            props.history.push("/employees/new");
          }}
        >
          New Employee
        </button>
      </section> */}
    </>
  );
};
export default EmployeeList;