import React from "react";
import "./style.css";

function Click(props) {
  return (
    <div
      role="img"
      aria-label="click item"
      onClick={() => props.handleClick(props.id)}
      style={{ backgroundImage: `url("${props.image}")` }}
      className={`click-item`}
    />
  );
}

export default Click;