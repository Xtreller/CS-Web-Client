import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

export default function Details(props) {
  const [garage, setGarage] = useState({});
  console.log(props.location);
  let { id } = useParams();
  console.log(id);
  useEffect(() => {
    console.log("kurva");
    fetch(`https://localhost:5001/api/garage/${id}`)
      .then((data) => data.json())
      .then((result) => setGarage(result))
      .catch();
  }, [id]);
  return (
    <div>
      <img
        className="w-100 h-30"
        src="https://www.askideas.com/media/13/Keep-Calm-And-Listen-To-Music-Facebook-Cover-Photo.jpeg"
        alt="cover"
      />
      <h2 className="mt-5">{garage.name}</h2>
      <p>Rating: {garage.rating}</p>
      {/* <button onClick={this.logout()}>Logout</button> */}
    </div>
  );
}
