import React, { Component } from 'react';

// const _final = "https://localhost:44322/";
// const _web = "https://localhost:44337/"
// const _demo = "https://localhost:44337/"
export class Home extends Component {

  static displayName = Home.name;
  constructor(props) {
    super(props)
    this.state = { };
    
  }
 
  render() {
    return (
      <div>
        <img className="logo" src="./logo.png" alt="" />
        <h1>Hello, world!</h1>
        <p></p>
       </div>
    );
  }
}
