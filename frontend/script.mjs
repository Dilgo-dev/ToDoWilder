import nextCard, { prevCard } from "./assets/script/nextCard.mjs";
import createCard from "./assets/script/create/createCard.mjs";
import getSavedCard from "./assets/script/getSavedCard.mjs";
import createConfirm from "./assets/script/create/createConfirm.mjs";
import deleteAllCard from "./assets/script/deleteAllCard.mjs";
import changebackground from "./assets/script/changeBackground.mjs";


export const main = document.querySelector("main");
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

export function random(max) {
    const randomNumber = Math.floor(Math.random() * max);
    console.log(max)
    console.log("Random number: ", randomNumber)
    return randomNumber
};

export const saveTodos = () => { localStorage.setItem("todos", JSON.stringify(cardContent)) };

addCard.addEventListener("click", () => {
    const result = prompt("Nom de la nouvelle carte :")
    if (isExistTitle(result)) return
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
    main.appendChild(card);
    card.style.top = random(window.screen.height - card.offsetHeight * 2) + "px";
    card.style.left = random(window.screen.width - card.offsetWidth * 2) + "px";

    // On actualise le dom avec la nouvelle carte
    card.querySelector("header > .left > h2").focus();
    cardContent.push({ title: result, element: card , position: {left: card.style.left, top: card.style.top}});
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

const deleteButton = document.querySelector("nav > img");
const containerConfirm = document.querySelector("nav > .container-confirm")
const buttonYes = document.querySelector("button#yes");
const buttonNo = document.querySelector("button#no");

deleteButton.addEventListener("click", () => {
    containerConfirm.classList.toggle("open");
    buttonNo.focus()
    buttonYes.addEventListener("click", () => {
        deleteAllCard();
    })
    buttonNo.addEventListener("click", () => {
        containerConfirm.classList.toggle("open");
    })
});

changebackground();