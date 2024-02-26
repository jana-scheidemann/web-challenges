import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button>Button number one</Button>
      <Button>second button</Button>
      <Button>Ich bin Nummer drei</Button>
      <Button>numero cuatro</Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
