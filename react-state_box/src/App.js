import "./styles.css";
import { useState } from "react";

export default function App() {
  // let isActive = false;
  const [isActive, setIsActive] = useState(false);
  const [textActive, setTextActive] = useState(true);

  function handleClick() {
    setIsActive(!isActive);
    setTextActive(!textActive);
    // Check that the value changes correctly.
    console.log(isActive);
  }

  return (
    <main>
      <div className={`box ${isActive ? "box--active" : ""}`} />
      <button onClick={handleClick}>
        {textActive ? "Activate" : "Deactivate"}
      </button>
    </main>
  );
}
