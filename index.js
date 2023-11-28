const bodyElement = document.querySelector('[data-js="body"]');
const cardElement = document.querySelector('[data-js="card]');

const toggleButton = document.querySelector('[data-js="toggleButton"]');

toggleButton.addEventListener("click", () => {
  bodyElement.classList.toggle("dark");
});
