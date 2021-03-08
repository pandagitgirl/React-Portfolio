import React, { Component } from "react";
import Card from "../components/Card";
import FriendCard from "../components/FriendCard";
import Title from "../components/Title";
import Wrapper from "../components/Wrapper";





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
        <Wrapper>
      <Title>Projects</Title>
      <FriendCard
        // name={friends[0].name}
        // image={friends[0].image}
        // occupation={friends[0].occupation}
        // location={friends[0].location}
      />
      <FriendCard
        // name={friends[1].name}
        // image={friends[1].image}
        // occupation={friends[1].occupation}
        // location={friends[1].location}
      />
      <FriendCard
        // name={friends[2].name}
        // image={friends[2].image}
        // occupation={friends[2].occupation}
        // location={friends[2].location}
      />
    </Wrapper>
      </div>
    );
  }
}
export default Skills;
