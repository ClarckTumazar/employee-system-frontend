import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeService from "../services/employeeService";
import Employee from "./Employee";

const EmployeeList = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [employees, setEmployees] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await EmployeeService.getAllEmployees();
        setEmployees(response.data);
        console.log(employees);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  const deleteEmployee = (e, id) => {
    e.preventDefault();
    EmployeeService.deleteEmployee(id)
      .then((response) => {
        if (employees) {
          setEmployees((prevElement) => {
            return prevElement.filter((employee) => employee.id !== id);
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="EmployeeList">
        <button
          className="add-employee-button"
          onClick={(e) => navigate("/addEmployee")}
        >
          {" "}
          Add Employee{" "}
        </button>
        <table>
          <thead>
            <tr className="tr-header">
              <th>
                <span>First Name</span>
              </th>
              <th>Last Name</th>
              <th>Email ID</th>
              <th>Actions</th>
            </tr>
          </thead>

          {/* function for checking if laoding is done, and loads 
          all the employees into view */}
          {!loading && (
            <tbody>
              {employees?.length > 0 ? (
                employees.map((employee) => (
                  <Employee
                    employee={employee}
                    key={employee.id}
                    deleteEmployee={deleteEmployee}
                  />
                ))
              ) : (
                <tr>No employees found!</tr>
              )}
            </tbody>
          )}
        </table>
      </div>
    </>
  );
};

export default EmployeeList;
