import React, { useState } from "react";
import "../styles/App.css";
import { validateForm } from "../utils/validation/Register";

const App = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [state, setState] = useState({
    username: "",
    email: "",
    password: "",
    contactNo: "",
  });

  const [printError, setPrintError] = useState({
    username: "",
    email: "",
    password: "",
    contactNo: "",
  });
  const validateForm = (formObject) => {
    const errors = {};

    if (!formObject.username) {
      errors.username = "Username is required";
    }

    if (!formObject.email) {
      errors.email = "Email is required";
    }

    if (!formObject.password) {
      errors.password = "Password is required";
    } else if (formObject.password.length < 4) {
      errors.password = "Password must have more than 4 characters";
    }

    if (!formObject.contactNo) {
      errors.contactNo = "Contact no. is required";
    } else if (formObject.contactNo.length !== 10) {
      errors.contactNo = "Invalid contact no.";
    }

    return errors;
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    setPrintError({});
    // console.log("form submitted");

    const validationResult = validateForm(state);
    if (Object.keys(validationResult).length > 0) {
      setPrintError(validationResult);
      return;
    }
    setIsSubmitted(true);
    // alert("Success");

    setState({
      ...state,
      username: "",
      email: "",
      password: "",
      contactNo: "",
    });
    // e.target.reset();
  };

  const onInputChangeHandler = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  return (
    <div id="main">
      {isSubmitted && (
        <h3 className="success-alert">Registered Successfullly</h3>
      )}
      <form onSubmit={onFormSubmit}>
        <h1>Registeration Form</h1>
        <section>
          <label>Username</label>
          <input type="text" name="username" onChange={onInputChangeHandler} />
          <p className="username-error">{printError.username}</p>
          <label>Email</label>
          <input type="email" name="email" onChange={onInputChangeHandler} />
          <p className="email-error">{printError.email}</p>
          <label>Password</label>
          <input
            type="password"
            name="password"
            onChange={onInputChangeHandler}
          />
          <p className="password-error">{printError.password}</p>
          <label>Contact Number</label>
          <input
            type="number"
            name="contactNo"
            onChange={onInputChangeHandler}
          />
          <p className="contactNo-error">{printError.contactNo}</p>
          <button>Submit</button>
        </section>
      </form>
    </div>
  );
};

export default App;
