import createCard from "./create/createCard.mjs";
import { random } from "../../script.mjs";

export default function getSavedCard(cardContent, main) {
    // Get saved todo form local storage and parsed in a array
    const saved = JSON.parse(localStorage.getItem("todos"));

    // If no save then return
    if (!saved || saved.length === 0) return;


    // If there is saved Todo loop in it
    for (const todo of saved) {
        // Rebuild the card with the know information
        const card = createCard(todo.title);

        // Get position from save
        if (todo.position) {
            card.style.top = todo.position.top + "px";
            card.style.left = todo.position.left + "px";
        } else {
            card.style.top = random(window.screen.width) + "px";
            card.style.left = random(window.screen.height) + "px";
        }

        // Push the rebuild card into the main tab
        const {top, left} = card.style;
        cardContent.push({ title: todo.title, element: card, position: { top: top.split("px")[0], left: left.split("px")[0] } });

        // Append into the container of the cards
        main.appendChild(card);
    }

    // Find the last card and active it
    cardContent[cardContent.length - 1].element.classList.add("active");

    // Make all the other card inactive
    for (const todo of cardContent.slice(0, -1)) {
        todo.element.classList.add("inactive");
    }
}
