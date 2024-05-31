import createCard from "./assets/script/createCard.mjs";
import createTodo from "./assets/script/createTodo.mjs";
import getSavedCard from "./assets/script/getSavedCard.mjs";

createCard("Groceries");
//createTodo();
const container = document.querySelector(".card > main > .left")

const img = document.querySelector("img")

img.addEventListener('click', () => {
    createTodo(container);
});



const main = document.querySelector("main");
const addCard = document.querySelector("div.add");
const cardContent = [];

getSavedCard(cardContent, main);

addCard.addEventListener("click", () => {
    // Recupère le titre de la carte
    const result = prompt("Titre de la nouvelle carte");
    // Créer la carte avec le titre
    const card = createCard(result);
    // Ajout de notre nouvelle carte donc elle prends la class .active
    card.classList.add("active");

    // Boucler sur chaque carte du tableau
    for (const div of cardContent) {
        div.element.classList.remove("active");
        div.element.classList.add("inactive");
    }
    // Push la nouvelle carte dans le tableau
    cardContent.push({ title: result, element: card });
    localStorage.setItem("todos", JSON.stringify(cardContent));
    // On actualise le dom avec la nouvelle carte
    main.appendChild(card);
    // On affiche le tableau de toutes les cartes
    console.log(cardContent);
});

