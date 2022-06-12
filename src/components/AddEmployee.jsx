import { useState } from "react";
import EmployeeService from "../services/employeeService";

const AddEmployee = () => {

  const [employee, setEmployee] = useState({
    id: "",
    firstName: "",
    lastName: "",
    emailId: ""
  })

  const handleChange = (e) => {
    const value = e.target.value;
    setEmployee({...employee, [e.target.name]: value});
  };

  const saveEmployee = (e) => {
    e.preventDefault()
    EmployeeService.saveEmployee(employee)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      }) 
  };

  const getAllEmployees = (e) => {
    e.preventDefault()
    EmployeeService.getAllEmployees()
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  return(
    <form className="AddEmployeeForm">
      <header>
        Add New Employee
      </header>

      <div className="input-group">
        <label>First Name</label>
        <input 
          type="text" 
          name="firstName" 
          value={employee.firstName}
          onChange={(e) => handleChange(e)} 
        />
      </div>

      <div className="input-group">
        <label>Last Name</label>
          <input 
            type="text" 
            name="lastName" 
            value = {employee.lastName} 
            onChange={(e) => handleChange(e)} 
          />
      </div>

      <div className="input-group">
        <label>Email</label>
          <input 
            type="text" 
            name="emailId" 
            value = {employee.emailId} 
            onChange={(e) => handleChange(e)} 
          />
      </div>

      <div className="button-group">
        <button 
          className="submit-button"
          onClick={(e) => saveEmployee(e)}
          > Add Employee </button>
        <button 
          className="cancel-button"
          > Cancel </button>
      </div>

    </form>
  );
};

export default AddEmployee;

