import React from "react";
import "./style.css";

//Wrapper component
function Wrapper(props) {
  return <div className="wrapper">{props.children}</div>;
}

export default Wrapper;
