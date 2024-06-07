import nextCard, { prevCard } from "./assets/script/nextCard.mjs";
import createCard from "./assets/script/createCard.mjs";
import getSavedCard from "./assets/script/getSavedCard.mjs";
import changebackground from "./assets/script/changebackground.mjs";
import createTodo from "./assets/script/createTodo.mjs";


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

    deleteCard(card);
});

//changeCard(main, cardContent, 0);
changebackground();

document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowUp") {
        nextCard(main, cardContent);
    }
});

main.addEventListener("wheel", (event) => {
    if (event.deltaY > 0) {
        prevCard(main, cardContent, 0, cardContent.length - 1);
    } else {
        nextCard(main, cardContent);
    }
    event.preventDefault();
});