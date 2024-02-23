import React from "react";
import "./styles.css";

export default function App() {
  return <HelloWorldArticle />;
}

function HelloWorldArticle() {
  return (
    <article>
      <h1>I am a h1-Element.</h1>
      <p>I am a p-Element.</p>
      <div>
        I am a div-containers that does not care about accessibility. I am bad.
      </div>
    </article>
  );
}
