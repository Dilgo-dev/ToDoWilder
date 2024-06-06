import { cardContent, saveTodos } from "../../script.mjs";
import createTodo from "./createTodo.mjs";
import handleMouseDown from "./handleMouseDown.mjs";

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

export default function createCard(title) {
    // Create the div with the class card
    const card = document.createElement("div");
    card.classList.add("card");

    // Create the header element
    const header = document.createElement("header");
    card.appendChild(header);

    // Create left header element
    const headerLeft = document.createElement("div");
    headerLeft.classList.add("left");
    header.appendChild(headerLeft);

    // Create title for the left header
    const titleElement = document.createElement("h2");
    titleElement.innerHTML = title;
    titleElement.contentEditable = true;
    titleElement.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
            titleElement.blur();
            saveTodos();
        } else if (
            titleElement.textContent.length > 12 &&
            event.key !== "Backspace"
        ) {
            event.preventDefault();
        } else {
            const element = cardContent.find(
                (element) => element.element === card
            );
            element.title = titleElement.textContent;
        }
    });
    headerLeft.appendChild(titleElement);

    // Create parapraphe for the left header
    const paragraphe = document.createElement("p");
    let counterMaxInput = 0;
    let counter = 0;
    paragraphe.innerHTML = `${counter} of ${counterMaxInput} Tasks`;
    headerLeft.appendChild(paragraphe);

    // Create right header element
    const headerRight = document.createElement("div");
    headerRight.classList.add("right");
    header.appendChild(headerRight);

    // Create the edit image
    const edit = document.createElement("img");
    edit.src = "./assets/icon/edit.svg";
    edit.alt = "Edit button";
    headerRight.appendChild(edit);

    // Create the palette image
    const palette = document.createElement("img");
    palette.src = "./assets/icon/palette.svg";
    palette.alt = "paletteButton";
    headerRight.appendChild(palette);

    // Create main element
    const main = document.createElement("main");
    card.appendChild(main);

    // Create main left element
    const mainLeft = document.createElement("div");
    mainLeft.classList.add("left");
    main.appendChild(mainLeft);

    // Create main right element
    const mainRight = document.createElement("div");
    mainRight.classList.add("right");
    main.appendChild(mainRight);

    // Create the delete image
    const deleteImg = document.createElement("img");
    deleteImg.src = "./assets/icon/delete.svg";
    deleteImg.alt = "Delete button";
    deleteImg.classList.add("delete-svg");
    mainRight.appendChild(deleteImg);

    edit.addEventListener("click", () => {
        if (card.className.includes("inactive")) return;
        const { counterTodo, counterMaxTodo } = getCounter(card);
        updateCounter(card, counterTodo, counterMaxTodo + 1);
        createTodo(mainLeft, card);
    });
    card.addEventListener('mousedown', (e) => handleMouseDown(e, card));
    return card;
}
