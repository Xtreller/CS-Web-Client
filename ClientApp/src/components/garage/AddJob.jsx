import React, { Component } from "react";
import garageService from "./garageService";
import "../../static/css/jobinput.css";

export default class AddJob extends Component {
  _url = process.env.API_URL;
  constructor(props) {
    super(props);
    this.state = {};
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleInputChange(event) {
    const key = event.target.name;
    console.log(key);
    const value = event.target.value;

    Object.assign(this.state, { [key]: value });
    console.log(this.state);
  }
  handleSubmit(event) {
    event.preventDefault();
    let isAuth = localStorage.getItem("auth_token");
  }
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    return (
      <div>
        <h1>Add Job for {this.props.location.state.garage.name}</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="Name">Job Type</label>
            <input
              type="text"
              className="form-control"
              id="type"
              name="type"
              aria-describedby="type"
              onChange={this.handleInputChange}
              placeholder="Type of Job ex. Detailing, Polishing , Deep Cleaning."
            />
          </div>
          <div className="form-group">
            <label htmlFor="part">Job Part</label>
            <input
              type="text"
              className="form-control"
              id="part"
              name="part"
              onChange={this.handleInputChange}
              placeholder="Enter part working on ex. Seats,Headlights,Interior."
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Date</label>
            <input
              type="date"
              id="time"
              name="time"
              className="form-control"
              required
            ></input>
          </div>
          <div className="form-group">
            <label htmlFor="address">Time</label>
            <input
              type="time"
              id="time"
              name="time"
              className="form-control without_ampm"
              required
            ></input>
          </div>
          <div class="form-group ">
            <label htmlFor="address">Select Employee</label>

            <select class="form-control" aria-label="Default select example">
              <option selected disabled>
                Choose Employee
              </option>
              <option value="1">Ivan</option>
              <option value="2">Georgi</option>
              <option value="3">Alex</option>
            </select>
          </div>

          <button type="submit" className="btn btn-primary mt-3">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
