import React, { Component } from "react";

class Index extends Component {
    constructor(props)

    {

        super(props);

        this.state={

            'myname': 'Amanda Rodriguez',
            'myage': '32'

        }
    }

  render() {
    return (
      <div>
        {/* Your Html/JSX code goes here */}
        <h1>This is my component</h1>
        <h2>My Name is {this.state.myname}</h2>
        <h3>My Age is {this.state.myage}</h3>
        
      </div>
    );
  }
}
export default Index;
