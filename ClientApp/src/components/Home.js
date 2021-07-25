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
        <h1>Hello, world!</h1>
        <p>Welcome to your new single-page application, built with:</p>
        <ul>
          <li><a href='https://get.asp.net/'>ASP.NET Core</a> and <a href='https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx'>C#</a> for cross-platform server-side code</li>
          <li><a href='https://facebook.github.io/react/'>React</a> for client-side code</li>
          <li><a href='http://getbootstrap.com/'>Bootstrap</a> for layout and styling</li>
        </ul>
        <p>To help you get started, we have also set up:</p>
        <button onClick={this.testGet} className="btn btn-primary">Click</button>
        {this.state.toString()}
        </div>
    );
  }
}
