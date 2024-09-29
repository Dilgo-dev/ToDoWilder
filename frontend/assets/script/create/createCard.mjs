import { cardContent, saveTodos } from "../../../script.mjs";
import createTodo from "./createTodo.mjs";
import handleMouseDown from "../handleMouseDown.mjs";
import buttonsColor from "../buttonscolor.mjs";
import deleteCard from "../deleteCard.mjs";


export function updateCounter(card, counter, counterMaxInput) {
    const paragraphe = card.querySelector("header > .left > p");
    paragraphe.innerHTML = `${counter} of ${counterMaxInput} Tasks`;
    return paragraphe;
}

export function getCounter(card) {
    const paragraphe = card.querySelector("header > .left > p");
    const paragrapheArray = paragraphe.innerHTML.split(" ");
    return {
        counterTodo: parseInt(paragrapheArray[0]),
        counterMaxTodo: parseInt(paragrapheArray[2]),
    };
}

function handleKeydown(event, element)  {
    if (event.key === "Enter") {
        event.preventDefault();
        element.blur();
        saveTodos();
    } else if (element.textContent.length > 10 && event.key !== "Backspace") {
        event.preventDefault();
    } else {
        const card = cardContent.find((element) => element.element === card);
        card.title = titleElement.textContent;
    }
}

export default function createCard(title) {
    const card = document.createElement("div");
    card.classList.add("card");

    const header = document.createElement("header");
    card.appendChild(header);

    const headerLeft = document.createElement("div");
    headerLeft.classList.add("left");
    header.appendChild(headerLeft);

    const titleElement = document.createElement("h2");
    titleElement.innerHTML = title;
    titleElement.contentEditable = true;
    titleElement.addEventListener("keydown", (event) => handleKeydown(event, titleElement));
    headerLeft.appendChild(titleElement);

    const paragraphe = document.createElement("p");
    let counterMaxInput = 0;
    let counter = 0;
    paragraphe.innerHTML = `${counter} of ${counterMaxInput} Tasks`;
    headerLeft.appendChild(paragraphe);

    const headerRight = document.createElement("div");
    headerRight.classList.add("right");
    header.appendChild(headerRight);

    const edit = document.createElement("img");
    edit.src = "./assets/icon/edit.svg";
    edit.alt = "Edit button";
    headerRight.appendChild(edit);

    buttonsColor(headerRight, card);

    const main = document.createElement("main");
    card.appendChild(main);

    const mainLeft = document.createElement("div");
    mainLeft.classList.add("left");
    main.appendChild(mainLeft);

    // Create main right element
    const mainRight = document.createElement("div");
    mainRight.classList.add("right");
    main.appendChild(mainRight);

    const deleteImg = document.createElement("img");
    deleteImg.src = "./assets/icon/delete.svg";
    deleteImg.alt = "Delete button";
    mainRight.appendChild(deleteImg);

    // add an event to delete image
    deleteImg.addEventListener("click", () => {
        deleteCard(card);
    });

    edit.addEventListener("click", () => {
        const { counterTodo, counterMaxTodo } = getCounter(card);
        updateCounter(card, counterTodo, counterMaxTodo + 1);
        createTodo(mainLeft, card);
    });
    card.addEventListener('mousedown', (e) => handleMouseDown(e, card));

    // Restore color when card becomes inactive

    return card;
}
