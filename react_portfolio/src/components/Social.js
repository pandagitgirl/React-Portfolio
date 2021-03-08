import React, { Component } from "react";
import { Link } from 'react-router-dom';
// import FontAwesomeIcon from '@fortawesome/react-fontawesome';
// import { faGithub, faLinkedin } from '@fortawesome/fontawesome-free-solid'


class Social extends Component {
  render() {
    return (
      <div class="social">
        <Link 
        className="btn btn-link">GITHUB</Link>{"https://github.com/pandagitgirl"}

        <a href="https://github.com/pandagitgirl" target="_blank">
          <i class="fab fa-github"></i>
        </a>
        <Link className="btn btn-link">Linkedin</Link>{"https://www.linkedin.com/in/amanda-rodriguez-b87a641b6/"}
        <a href="https://www.linkedin.com/in/amanda-rodriguez-b87a641b6/" target="_blank">
          <i class="fab fa-linkedin-in"></i>
        </a>
        <a href="" target="_blank">
          <i class="fab fa-medium-m"></i>
        </a>
        <Link className="btn btn-link">PDF</Link>{"https://drive.google.com/file/d/1k01ZCPOJ4KXtjWQhqw1ipdAThzb3W-GS/view?usp=sharing"}
        <a href="https://drive.google.com/file/d/1k01ZCPOJ4KXtjWQhqw1ipdAThzb3W-GS/view?usp=sharing" target="_blank">
          <i class="fab fa-linkedin-in"></i>
        </a>
        <a href="" target="_blank">
          <i class="fab fa-medium-m"></i>
        </a>
      </div>
    );
  }
}
export default Social;
