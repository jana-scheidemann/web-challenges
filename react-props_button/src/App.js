import React from "react";
import "./styles.css";

export default function App() {
  function handleClick() {
    alert("Ouch! You clicked me");
  }
  return (
    <Button
      text="First Button"
      disabled={false}
      color={"red"}
      onClick={handleClick}
    />
  );
}

function Button({ color, disabled, text, onClick }) {
  return (
    <button style={{ color }} disabled={disabled} onClick={onClick}>
      {text}
    </button>
  );
}
