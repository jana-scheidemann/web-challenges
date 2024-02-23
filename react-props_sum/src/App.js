import React from "react";
import "./styles.css";

export default function App() {
  return <Sum valueA={3} valueB={15} />;
}

function Sum({ valueA, valueB }) {
  const add = valueA + valueB;
  return (
    <h1>
      {valueA} + {valueB} = {add}
    </h1>
  );
}
