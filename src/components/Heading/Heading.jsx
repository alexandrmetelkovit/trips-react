import React from "react";
import "./Heading.css"; // подключаем стили

// компонент
function Heading(props) {
  if (props.level === "h1") {
    return <h1 className={props.class}>{props.title}</h1>;
  }

  if (props.level === "h2") {
    return <h2 className={props.class}>{props.title}</h2>;
  }
}

export default Heading;
