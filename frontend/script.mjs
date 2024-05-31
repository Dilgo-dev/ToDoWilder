import createCard from "./assets/script/createCard.mjs";
import createTodo from "./assets/script/createTodo.mjs";

createCard("Groceries");
//createTodo();
const container = document.querySelector(".card > main > .left")

const img = document.querySelector("img")

img.addEventListener('click', () => {
    createTodo(container);
});