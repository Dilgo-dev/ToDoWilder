import createCard from "./createCard.mjs";

export default function getSavedCard(cardContent, main) {
    // Get saved todo form local storage and parsed in a array
    const saved = JSON.parse(localStorage.getItem("todos"));

    // If no save then return
    if (!saved) {
        return;
    }

    // If there is saved Todo loop in it
    for (const todo of saved) {
        // Rebuild the card with the know information
        const card = createCard(todo.title);

        // Push the rebuild card into the main tab
        cardContent.push({ title: todo.title, element: card });

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
