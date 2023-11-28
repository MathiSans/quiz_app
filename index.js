// 1. I want to speak to an element, that reacts to clicks
// 2. I want to define variables, that stand for the button element
// 3. another variable stands for when the button has been toggled
// 4. another variable stands for the reset state of the button

const bodyElement = document.querySelector('[data-js="body"]');
const toggleButton = document.querySelector('[data-js="toggleButton"]');

toggleButton.addEventListener("click", () => {
  bodyElement.classList.toggle("dark");
});
