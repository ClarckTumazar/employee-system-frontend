// import { useState } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeService from "../services/employeeService";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    firstName: yup
      .string()
      .required("First Name is required.")
      .min(3, "First Name must be atleast 3 characters long."),

    lastName: yup
      .string()
      .required("Last Name is required.")
      .min(3, "First Name must be atleast 3 characters long."),

    emailId: yup.string().required("Email is required.").email(),
  })
  .required();

const AddEmployee = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      id: "",
      firstName: "",
      lastName: "",
      emailId: "",
    },
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);

    EmployeeService.saveEmployee(data)
      .then((response) => {
        console.log(response);
        navigate("/employeeList");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const clearForm = (e) => {
    e.preventDefault();
    console.log("im clicked reset");
    reset(
      {
        id: "",
        firstName: "",
        lastName: "",
        emailId: "",
      },
      { keepErrors: true }
    );
  };

  return (
    <form className="AddEmployeeForm" onSubmit={handleSubmit(onSubmit)}>
      <header> Add New Employee </header>

      <div className="input-group">
        <label>First Name</label>
        <input {...register("firstName")} />
        <span className="error-message">{errors.firstName?.message}</span>
      </div>

      <div className="input-group">
        <label>Last Name</label>
        <input
          {...register("lastName", {
            required: true,
          })}
        />
        <span className="error-message">{errors.lastName?.message}</span>
      </div>

      <div className="input-group">
        <label>Email</label>
        <input
          type="email"
          name="emailId"
          {...register("emailId", { required: true })}
        />
        <span className="error-message">{errors.emailId?.message}</span>
      </div>

      <div className="button-group">
        <button type="submit" className="submit-button">
          Add Employee
        </button>
        <button className="cancel-button" onClick={(e) => clearForm(e)}>
          Clear
        </button>
      </div>
    </form>
  );
};

export default AddEmployee;
