import React, { useEffect, useState } from "react";
import { resolveTypeReferenceDirective } from "typescript";
import auth from "./authService";

export default function Register() {
  let [input, setInput] = useState({});
  let [message, setMessage] = useState("");
  let [body, setBody] = useState();

  function handleInputChange(event) {
    const key = event.target.name;
    console.log(key);
    const value = event.target.value;

    Object.assign(input, { [key]: value });
    console.log(input);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (
      !input["ConfirmPassword"] ||
      !input["Password"] ||
      !input["Email"]
    ) {
      setMessage("All fields are required");
      return;
    }
    if (input.password == input.repeatPassword) {
      setMessage("Registration successfull!");
      auth.register(input);
    } else {
      setMessage("Password and Repeat Password doesn't match!");
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p className="text-danger text-center">{message}</p>
        <div className="form-group">
          <label htmlFor="FirstName">First Name</label>
          <input
            onChange={handleInputChange}
            name="FirstName"
            className="form-control"
            id="email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="LastName">Last Name</label>
          <input
            onChange={handleInputChange}
            name="LastName"
            className="form-control"
            id="email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="Email">Email address</label>
          <input
            onChange={handleInputChange}
            type="email"
            name="Email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            onChange={handleInputChange}
            type="password"
            name="Password"
            className="form-control"
            id="exampleInputPassword1"
            />
        </div>
        <div className="form-group">
          <label htmlFor="ConfirmPassword">Repeat Password</label>
          <input
            onChange={handleInputChange}
            type="password"
            name="ConfirmPassword"
            className="form-control"
            id="repeatPassword"
            />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
