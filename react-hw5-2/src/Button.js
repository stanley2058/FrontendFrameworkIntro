import React from "react";
import "./Button.css";

export default function Button(props) {
  const type = props.type || "button";
  const color = props.color || "primary";
  const onClick = props.onClick || function () {};
  const disabled = props.disabled || false;

  return (
    <button
      type={type}
      className={`btn btn-${color}`}
      onClick={onClick}
      disabled={disabled}
    >
      {props.children}
    </button>
  );
}
