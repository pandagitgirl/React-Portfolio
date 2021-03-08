import React, { Component } from "react";
import Card from "../components/Card";



class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myskills: ["HTML", "CSS", "JS", "REACT JS", "MongoDB", "MySQL"],
    };
  }
  render() {
    return (
      <div className="condiv skills">
        <h1 className="subtopic">My Skills and ProJects</h1>
        <ul>
          {this.state.myskills.map((value) => {
            return <li>{value}</li>;
          })}
        </ul>
      </div>
    );
  }
}
export default Skills;
