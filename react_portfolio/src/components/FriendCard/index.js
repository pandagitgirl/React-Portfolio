import React from "react";
import "./style.css";
import { Link } from 'react-router-dom';

function FriendCard(props) {
  return (

    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>The Taste of Music</strong> {props.name}
          </li>
          <li>
            <Link className="btn btn-link"></Link>{"https://enevarez-ops.github.io/projectOne/"}
        <a href="https://enevarez-ops.github.io/projectOne/" target="_blank"></a>
            {/* <strong>Title:</strong> {props.occupation} */}
          </li>
          <li>
            {/* <strong>Address:</strong> {props.location} */}
          </li>
        </ul>
      </div>
      <span className="remove">𝘅</span>
      </div>
    
  );
}

export default FriendCard;
