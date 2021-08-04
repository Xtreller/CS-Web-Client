import React, { Component } from "react";

export default class AddGarage extends Component {
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
  
    if (isAuth) {
      this.setState({user_id:localStorage.getItem('user_id')})
      console.log(this.state);
      fetch("https://localhost:5001/api/garage/add", {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          Authorization: "Bearer " + isAuth,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.state),
      })
      .then(data => data.json())
        .then((res) => console.log(res))
        .catch((err) => console.log());
    }
  }
  render() {
    return (
      <div>
        <h1>Add Garage</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="Name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              aria-describedby="name"
              onChange={this.handleInputChange}
              placeholder="Enter The Name of your Garage, Studio, Center,Bussiness."
            />
          </div>
          <div className="form-group">
            <label htmlFor="Town">Town</label>
            <input
              type="text"
              className="form-control"
              id="town"
              name="town"
              onChange={this.handleInputChange}
              placeholder="Enter the town your business is located."
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              className="form-control"
              id="address"
              name="address"
              onChange={this.handleInputChange}
            />
          </div>
          <button type="submit" className="btn btn-primary mt-3">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
