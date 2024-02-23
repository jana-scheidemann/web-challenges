import "./styles.css";

export default function App() {
  return <Greeting name="Jana" />;
}

function Greeting({ name }) {
  return <h1>Hello, {name == "Dömser" ? "Coach" : name}!</h1>;
}
