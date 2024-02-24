console.clear();

const url = "https://swapi.dev/api/people";

async function fetchData() {
  const response = await fetch(url);
  const json = await response.json();
  return json.results;
}
fetchData();

// - log the entire data object
console.log(await fetchData());

// - log different values of the data object
const results = await fetchData();
const nameOfIndex0 = results[0].name;
console.log(nameOfIndex0);

const allNames = results.map((result) => result.name);
console.log(allNames);

// - Bonus: Can you log the eye color of R2-D2?
const eyeColorOfR2D2 = results[2].eye_color;
console.log(eyeColorOfR2D2);
