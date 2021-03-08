import React, { Component } from "react";
import Widecard from "../components/Widecard";


class Education extends Component {
  render() {
    return (
      <div className="condiv">
        <h1 className="subtopic">My Education</h1>
        <Widecard
          title="Full Stack Web Development"
          where="Denver University"
          from="September 2020"
          to="March 2021"
        />
        <Widecard
          title="Associates Degree Applied Science"
          where="Central New Mexico Community College"
          from="2006"
          to="2011"
        />
      </div>
    );
  }
}
export default Education;
