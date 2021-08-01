import React, { useState } from "react";
import auth from "./authService";

export default function Login() {
  let [input, setInput] = useState({});
  let [message, setMessage] = useState("");
  function handleInputChange(event) {
    const key = event.target.name;
    console.log(key);
    const value = event.target.value;

    Object.assign(input, { [key]: value });
    console.log(input);
  }
  function handleSubmit(event) {
    event.preventDefault();
    if (!input.Password || !input.Email) {
      setMessage("All fields are required");
      console.log(message);
    }
    console.log(input);
    auth.login(input);
  }
  return (
    <form onSubmit={handleSubmit}>
      <p className="text-danger text-center">{message}</p>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input
          onChange={handleInputChange}
          type="email"
          name="Email"
          className="form-control"
          id="email"
          aria-describedby="emailHelp"
          placeholder="Enter email"
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input
          onChange={handleInputChange}
          type="password"
          name="Password"
          className="form-control"
          id="exampleInputPassword1"
          placeholder="Password"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
