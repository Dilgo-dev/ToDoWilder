import nextCard, { prevCard } from "./assets/script/nextCard.mjs";
import createCard from "./assets/script/createCard.mjs";
import getSavedCard from "./assets/script/getSavedCard.mjs";
import createTodo from "./assets/script/createTodo.mjs";


const main = document.querySelector("main");
const addCard = document.querySelector("div.add");
export const cardContent = [];

getSavedCard(cardContent, main);

const isExistTitle = (newTitle) => {
    const cards = document.querySelectorAll(".card");

    for (const card of cards) {
        const title = card.querySelector("header > .left > h2").textContent;
        if (title === newTitle) return true;
    }
    return false;
}

export function random(max) { return Math.floor(Math.random() * max)};

export const saveTodos = () => { localStorage.setItem("todos", JSON.stringify(cardContent)) };

addCard.addEventListener("click", () => {
    // Créer la carte avec le titre
    const card = createCard("");
    // Ajout de notre nouvelle carte donc elle prends la class .active
    card.classList.add("active");

    // Boucler sur chaque carte du tableau
    for (const div of cardContent) {
        div.element.classList.remove("active");
        div.element.classList.add("inactive");
    }
    // Push la nouvelle carte dans le tableau
    card.style.top = random(window.screen.width) + "px";
    card.style.left = random(window.screen.height) + "px";

    // On actualise le dom avec la nouvelle carte
    main.appendChild(card);
    card.querySelector("header > .left > h2").focus();
    cardContent.push({ title: result, element: card , position: {left: 0, top: 0}});
    saveTodos();
});

//changeCard(main, cardContent, 0);

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


