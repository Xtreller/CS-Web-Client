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
    fetch("https://localhost:44322/garage/add", {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state),
    })
      .then((res) => console.log(res))
      .catch((err) => console.log());
  }
  //   public int Id { get; set; }
  //   [Required]
  //   public string Name { get; set; }
  //   public double Rating { get; set; }
  //   public int Done_Jobs { get; set; }
  //   public string Town { get; set; }
  //   public string Address { get; set; }
  //   public ICollection<WorkingDays> WorkingDays{ get; set; }
  //   public virtual ICollection<Job> Jobs { get; set; }
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
