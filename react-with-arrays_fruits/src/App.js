import Card from "./components/Card";

export default function App() {
  const fruits = [
    { id: 26, name: "mango", color: "yellowred" },
    { id: 5, name: "apple", color: "yellowred" },
    { id: 77, name: "kiwi", color: "green" },
    { id: 87, name: "pineapple", color: "yellow" },
    { id: 1, name: "orange", color: "orange" },
    { id: 90, name: "passionfruit", color: "purple" },
    { id: 9, name: "banana", color: "yellow" },
  ];

  return (
    <div className="app">
      <article>
        {fruits.map(({ name, id }) => {
          return (
            <p key={id}>
              <Card name={name} />
            </p>
          );
        })}
      </article>
    </div>
  );
}
