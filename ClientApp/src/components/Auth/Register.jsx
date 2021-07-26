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
    if (!input["Input.ConfirmPassword"] || !input["Input.Password"] || !input["Input.Email"]) {
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
      {/* <div class="row">
        <div class="col-md-4">
          <form
            id="registerForm"
            method="post"
            action="/Identity/Account/Register?returnUrl=%2Fauthentication%2Flogin"
          >
            <h4>Create a new account.</h4>
            <hr />
            <div
              class="text-danger validation-summary-valid"
              data-valmsg-summary="true"
            ></div>
            <div class="form-group">
              <label for="Input_Email">Email</label>
              <input
                class="form-control"
                type="email"
                data-val="true"
                data-val-email="The Email field is not a valid e-mail address."
                data-val-required="The Email field is required."
                id="Input_Email"
                name="Input.Email"
                value=""
              />
              <span
                class="text-danger field-validation-valid"
                data-valmsg-for="Input.Email"
                data-valmsg-replace="true"
              ></span>
            </div>
            <div class="form-group">
              <label for="Input_Password">Password</label>
              <input
                class="form-control"
                type="password"
                data-val="true"
                data-val-length="The Password must be at least 6 and at max 100 characters long."
                data-val-length-max="100"
                data-val-length-min="6"
                data-val-required="The Password field is required."
                id="Input_Password"
                name="Input.Password"
              />
              <span
                class="text-danger field-validation-valid"
                data-valmsg-for="Input.Password"
                data-valmsg-replace="true"
              ></span>
            </div>
            <div class="form-group">
              <label for="Input_ConfirmPassword">Confirm password</label>
              <input
                class="form-control"
                type="password"
                data-val="true"
                data-val-equalto="The password and confirmation password do not match."
                data-val-equalto-other="*.Password"
                id="Input_ConfirmPassword"
                name="Input.ConfirmPassword"
              />
              <span
                class="text-danger field-validation-valid"
                data-valmsg-for="Input.ConfirmPassword"
                data-valmsg-replace="true"
              ></span>
            </div>
            <button id="registerSubmit" type="submit" class="btn btn-primary">
              Register
            </button>
            <input
              name="__RequestVerificationToken"
              type="hidden"
              value="CfDJ8LP2HVVRKUVBs7s7cKzbxAWz6MKygQk633HmxUT2vwwr9Obv16twrdyAkDtJs9-pCnZ1G_9lCpTRhRpwESfhwYpn_XFbPg5Z2M3bweW-tfUj8IDOgvScL7WC2oFWADRh34I-11b54KDuN3C_bTkqKCY"/>
          </form>
        </div>
        <div class="col-md-6 col-md-offset-2">
          <section>
            <h4>Use another service to register.</h4>
            <hr />
            <div>
              <p>
                There are no external authentication services configured. See{" "}
                <a href="https://go.microsoft.com/fwlink/?LinkID=532715">
                  this article
                </a>
                for details on setting up this ASP.NET application to support
                logging in via external services.
              </p>
            </div>
          </section>
        </div>
  </div>*/}

      <form onSubmit={handleSubmit}>
        <p className="text-danger text-center">{message}</p>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            onChange={handleInputChange}
            type="email"
            name="Input.Email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            onChange={handleInputChange}
            type="password"
            name="Input.Password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>
        <div className="form-group">
          <label htmlFor="Input.ConfirmPassword">Repeat Password</label>
          <input
            onChange={handleInputChange}
            type="password"
            name="Input.ConfirmPassword"
            className="form-control"
            id="repeatPassword"
            placeholder="Repeat Password"
          />
          <input
            name="__RequestVerificationToken"
            type="hidden"
            value="CfDJ8LP2HVVRKUVBs7s7cKzbxAWz6MKygQk633HmxUT2vwwr9Obv16twrdyAkDtJs9-pCnZ1G_9lCpTRhRpwESfhwYpn_XFbPg5Z2M3bweW-tfUj8IDOgvScL7WC2oFWADRh34I-11b54KDuN3C_bTkqKCY"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
