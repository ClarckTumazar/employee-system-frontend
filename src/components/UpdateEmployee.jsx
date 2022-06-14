import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import employeeService from '../services/employeeService';
import EmployeeService from '../services/employeeService' 
const UpdateEmployee = () => {

  const { id } = useParams();
  const navigate = useNavigate();
  const [employee, setEmployee] = useState({
    id: "",
    firstName: "",
    lastName: "",
    emailId: ""
  })

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await EmployeeService.getEmployee(id);
        setEmployee(response.data);
        console.log(employee)
      } 
      catch(error){
        console.log(error);
      } 
    };
    fetchData();  
  }, []);


  const handleChange = (e) => {
    const value = e.target.value;
    setEmployee({...employee, [e.target.name]: value});
  };


  const updateEmployee = (e) => {
    e.preventDefault()
    employeeService.updateEmployee(employee, id)
      .then((response) => {
        console.log(response)
        navigate("/employeeList");
      })
      .catch((error) => {
        console.log(error)
      });
  };

  return (
    <form className="AddEmployeeForm">
      <header>
        Update Employee
      </header>

      <div className="input-group">
        <label>First Name</label>
        <input 
          type="text" 
          name="firstName" 
          value={employee.firstName}
          required
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
          onClick={(e) => updateEmployee(e)}
          > Update </button>
        <button 
          className="cancel-button"
          onClick={() => navigate('/employeeList')}
          > Cancel </button>
      </div>

    </form>
  )
}

export default UpdateEmployee;