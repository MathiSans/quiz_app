const bodyElement = document.querySelector('[data-js="body"]');
const mainElement = document.querySelector('[data-js="main"]');
const cardElement = document.querySelector('[data-js="card]');
const tagListContent = document.querySelector('[data-js="tag-list-item"]');
const toggleButton = document.querySelector('[data-js="toggleButton"]');

//Object: Question Card
const questionCard = {
  question: "What property flips the axis in flexbox?",
  answer: "flex-direction",
  //Array of objects
  tags: ["#html", "#flexbox", "#css"],
};

//Dark Mode Toggle
toggleButton.addEventListener("click", () => {
  bodyElement.classList.toggle("dark");
});

//Background of the question card
const card = document.createElement("card");
card.classList.add("card__background");

//Bookmark Button
const bookmarkButton = document.createElement("img");
bookmarkButton.setAttribute("src", "assets/bookmark_button.svg");
bookmarkButton.classList.add("bookmark__button");

//Question
const question = document.createElement("p");
question.textContent = questionCard.question;
question.classList.add("card__question");

//Show answer button
const button = document.createElement("button");
button.textContent = "Show answer";
button.classList.add("card__button-answer");

//Answer
const answer = document.createElement("answer");
answer.textContent = questionCard.answer;
answer.classList.add("card__answer");

//Tag container <ul>
const tagList = document.createElement("ul");
tagList.classList.add("card__tag-list");

//Tag list
const tagListItem = document.createElement("li");
tagListItem.classList.add("card__tag-list-item");
tagListItem.textContent = questionCard.tags[0];
tagListItem.textContent = questionCard.tags[1];
tagListItem.textContent = questionCard.tags[2];

mainElement.append(card);
card.append(bookmarkButton);
card.append(question);
card.append(button);
card.append(answer);
card.append(tagList);
tagList.append(tagListItem);
console.log(card);
