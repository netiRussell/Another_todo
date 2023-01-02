import React from "react";
import classes from "./CSSModuleButton.module.css";

function CSSModuleButton({ type, onClick, content }) {
  return (
    <button className={"button " + classes.button} type={type} onClick={onClick}>
      {content}
    </button>
  );
}

export default CSSModuleButton;
