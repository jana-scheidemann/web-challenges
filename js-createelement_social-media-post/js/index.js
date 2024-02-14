console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.
const newArticle = document.createElement("article");
newArticle.classList.add("post");
const newParagraph = document.createElement("p");
newParagraph.classList.add("post__content");
newParagraph.textContent = "This is a new social media post.";
const newFooter = document.createElement("footer");
newFooter.classList.add("post__footer");
const newSpan = document.createElement("span");
newSpan.classList.add("post__username");
newSpan.textContent = "@usernameXYZ";
const newButton = document.createElement("button");
newButton.classList.add("post__button");
newButton.textContent = "♥ Like";

document.body.append(newArticle);
newArticle.append(newParagraph);
newArticle.append(newFooter);
newFooter.append(newSpan);
newFooter.append(newButton);

newButton.addEventListener("click", handleLikeButtonClick);
