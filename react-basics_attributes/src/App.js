import React from "react";
import "./styles.css";

export default function App() {
  return <Article />;
}

function Article() {
  return (
    <article className="article">
      <h2 className="article__title">I am a text of my owners choice.</h2>
      <label htmlFor="label"></label>
      <input id="label"></input>
      <a
        className="article__link"
        href="https://css-tricks.com/snippets/css/complete-guide-grid/"
      >
        A Complete Guide to CSS Grid
      </a>
    </article>
  );
}
