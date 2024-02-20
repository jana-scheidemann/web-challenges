console.clear();

const userElement = document.querySelector(".user");
const errorOutput = document.querySelector(".error");

async function getUser(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network error");
    }
    const json = await response.json();
    return json.data;
  } catch (error) {
    console.log(error);
    errorOutput.innerHTML = "URL not found.";
    return null;
  }
}

document.querySelectorAll("button[data-url]").forEach((button) =>
  button.addEventListener("click", async (event) => {
    const user = await getUser(event.target.dataset.url);
    if (user === null) {
      userElement.innerHTML = "User info will appear here.";
    } else {
      userElement.innerHTML = `
    <h2>${user.first_name} ${user.last_name}</h2>
    <img alt="${user.first_name} ${user.last_name}" src="${user.avatar}"/>
    `;
      errorOutput.innerHTML = "";
    }
  })
);
