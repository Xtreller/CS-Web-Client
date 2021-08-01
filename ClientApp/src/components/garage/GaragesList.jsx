import React, { Component } from "react";
import { Link } from "react-router-dom";

class GarageList extends Component {
  constructor(props) {
    super(props);
    this.state = { garages: [] };
  }

  componentDidMount() {
    fetch("https://localhost:5001/api/garage/all", {
      cache: "no-cache",
      mode:"cors",
      credentials: "same-origin",
      headers: {
        Authentication: 
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJZCI6ImJiZjViNmQyLTRmNzQtNGE2OS04MDVmLTk4MTdiOTI2ZWYxMyIsImVtYWlsIjoidGVzdEBnbWFpbC5jb20iLCJzdWIiOiJ0ZXN0QGdtYWlsLmNvbSIsImp0aSI6ImFjY2E3ODllLTJmZjctNGE3NS1hMThhLWUzYzE3OWRhNWY1NiIsIm5iZiI6MTYyNzgyMDc1OCwiZXhwIjoxNjI3ODQyMzU4LCJpYXQiOjE2Mjc4MjA3NTh9.w1FWS5KVkfAiwSloVhHXfT2JHF_5d53F12meZtydVOU",
      },
    })
      .then((response) => response.json())
      .then((res) => {
        console.log(res);
        this.setState({ garages: res });
      })
      .catch((err) => this.setState({ res: err }));
  }
  render() {
    return (
      <div>
        <h1>Garages</h1>

        {this.state.garages.map((garage) => {
          return (
            <div className="card mb-4" key={garage.id}>
              <div className="card-header">
                <strong>{garage.name}</strong>
              </div>
              <div className="card-body container">
                <div className="row">
                  <div className="col">
                    <p className="card-title">Town: {garage.town}</p>
                    <p className="card-text">Address: {garage.address}</p>
                  </div>
                  <div className="col">
                    <p className="card-text">Done Jobs: {garage.done_jobs}</p>
                    <p className="card-text">Rating: {garage.rating}/10</p>
                  </div>
                </div>

                <Link
                  className="btn btn-primary"
                  to={{
                    pathname: "/garage/" + garage.id,
                  }}
                >
                  Details
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
export default GarageList;
