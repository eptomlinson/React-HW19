import React from "react";
import "./style.css";
​
function FriendCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img
          alt= {props.info.name}
          src= {props.info.image} 
        />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.info.name}
          </li>
          <li>
            <strong>Occupation:</strong> {props.info.occupation}
          </li>
          <li>
            <strong>Location:</strong> {props.info.location}
          </li>
        </ul>
      </div>
    </div>
  );
}
​
export default FriendCard;