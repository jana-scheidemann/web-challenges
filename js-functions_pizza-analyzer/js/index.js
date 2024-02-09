console.clear();

const pizzaInput1 = document.querySelector('[data-js="pizza-input-1"]');
const pizza1 = document.querySelector('[data-js="pizza-1"]');
const pizzaInput2 = document.querySelector('[data-js="pizza-input-2"]');
const pizza2 = document.querySelector('[data-js="pizza-2"]');
const outputSection = document.querySelector('[data-js="output-section"]');

const output = document.querySelector('[data-js="output"]');

pizzaInput1.addEventListener("input", () => {
  // write your code here
  let pizzaSize1 = pizzaInput1.value;
});

 pizzaInput2.addEventListener("input", () => {
  // write your code here
  let pizzaSize2 = pizzaInput2.value;
});

// Task 1
// define the function calculatePizzaGain here
function calculatePizzaGain(diameter1, diameter2) {
  const area1 = (diameter1 / 2)** * `Math.PI`;
  const area2 = (diameter2 / 2)** * `Math.PI`;
  const gain = Math.round(((area2 - area1) / area1) * 100);
}

output.value = calculatePizzaGain(gain);
calculatePizzaGain(24, 42);
// Task 2
// define the function updatePizzaDisplay here

// Task 3
// define the function updateOutputColor here
