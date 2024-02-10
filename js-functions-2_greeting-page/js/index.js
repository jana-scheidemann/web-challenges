console.clear();

/*
Change the contents of this page depending on the current day and time.

- Write a function getGreeting that returns a different greeting depending on the current time:
  - 6 - 12: returns "Good Morning"
  - 13 - 18: returns "Good Afternoon"
  - 19 - 22: returns "Good Evening"
  - 23 - 5: returns "Good Night"

(HINT: you can get the current time: new Date().getHours() )

- Write a function getDayColor that returns a different color depending on the current weekday:
  - monday: "darkgray"
  - tuesday - friday: "lightblue"
  - saturday - sunday: "hotpink"

(HINT: you can get the current weekday: new Date().getDay() )

*/

const display = document.querySelector('[data-js="display"]');

function getGreeting() {
  // Code here
  const now = new Date().getHours();
  if (now >= 6 && now <= 12) {
    return "Good Morning";
  } else if (now >= 13 && now <= 18) {
    return "Good Afternoon";
  } else if (now >= 19 && now <= 22) {
    return "Good Evening";
  } else {
    return "Good Night";
  }
}

function getDayColor() {
  // Code here
  const whatDayIsToday = new Date().getDay();
  if (whatDayIsToday == 1) {
    return (backgroundColor = "darkgrey");
  } else if (whatDayIsToday > 1 && whatDayIsToday < 6) {
    return (backgroundColor = "lightblue");
  } else if (whatDayIsToday == 6 || 0) {
    return (backgroundColor = "hotpink");
  }
}

display.textContent = getGreeting();
document.body.style.backgroundColor = getDayColor();
