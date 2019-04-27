import React from "react";
import "./style.css";


function Nav(props) {
  return (
    <nav className="navbar">
      <ul>
        <li className="brand">
          <a href="/">Memory Game</a>
        </li>
        <li>
          Pets: {props.pets}  Most Pets: {props.mostPets}
        </li>
      </ul>
    </nav>
  );
}

export default Nav;