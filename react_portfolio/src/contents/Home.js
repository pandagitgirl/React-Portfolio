import React, { Component } from "react";
import homepic from "../img/DSC_9648.jpg";
import Social from '../components/Social'

class Home extends Component {
  render() {
    return (
      <div className="condiv home">
        <img src={homepic} className="homepic"></img>
        <Social/>
      </div>
    );
  }
}
export default Home;
