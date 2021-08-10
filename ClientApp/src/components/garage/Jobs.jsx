import React, { Component } from "react";
import { Link } from "react-router-dom";

class Jobs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      garage: {},
      jobs: [
        {
          type: "Detailing",
          part: "Interior",
          time: "4hr",
          rating: 4,
          done_by: "Ivan",
        },
      ],
    };
  }

  componentDidMount() {
    fetch("https://localhost:5001/api/garage/all", {
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("auth_token"),
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((res) => {
        console.log(res);
        this.setState({ garage: res[0] });
      })
      .catch((err) => this.setState({ res: err }));
  }
  render() {
    return (
      <div>
        <h1>Jobs Done By {this.state.garage.name}</h1>
        <Link
          className="btn btn-primary"
          to={{
            pathname: "/add-job/" + this.state.garage.id,
            state: this.state.garage,
          }}
        >
          Add Job
        </Link>
        {this.state.jobs.map((job) => {
          return (
            <div className="card mb-4" key="1">
              <div className="card-header">
                <strong> Job Type : {job.type} </strong>
                <strong>
                  {" "}
                  {job.type} Part : {job.part}
                </strong>
              </div>
              <div className="card-body container">
                <div className="row">
                  <div className="col">
                    <p className="card-title">Time: {job.time} </p>
                    <p className="card-text">Rating: {job.rating} / 10</p>
                  </div>
                  <div className="col">
                    <p className="card-text">Done by Employee: {job.done_by}</p>
                  </div>
                </div>

                {/* <Link
                  className="btn btn-primary"
                  to={{
                    pathname: "/garage/" + garage.id,
                  }}
                >
                  Details
                </Link> */}
              </div>
              <div className="form-group m-auto w-100 d-flex jusitfy-content-center align-self-center">
                <input
                  className="w-100 form-control"
                  type="text"
                  name="comment"
                  placeholder="Comment..."
                />
                <button type="submit" disabled className="btn btn-primary w-25">
                  Send
                </button>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
export default Jobs;
