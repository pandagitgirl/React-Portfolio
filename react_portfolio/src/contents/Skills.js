import React, { Component } from "react";
import ProjectCard from "../components/ProjectCard";
import db from "../db/db.json"
// import FriendCard from "../components/FriendCard";
// import Title from "../components/Title";
// import Wrapper from "../components/Wrapper";





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
        <h1 className="subtopic">My Skills</h1>
        <ul>
          {this.state.myskills.map((value) => {
            return <li>{value}</li>;
          })}
        </ul>
        <h1>Projects</h1>
        {db.map((value) => {
          return <ProjectCard title={value.Title} image={value.Image} />
        })}
       
        
      </div>
    );
  }
}
export default Skills;
