import React from "react";
import "./style.css";

//Title component
function Title(props) {
  return <h1 className="title">{props.children}</h1>;
}

export default Title;
