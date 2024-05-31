export default function getSavedCard(cardContent) {
    const saved = JSON.parse(localStorage.getItem("todos"));

    if (!saved) return;
    for (const todo of saved) {
        const card = createCard(todo.title);
        cardContent.push({ title: todo.title, element: card });
        main.appendChild(card);
    }
    cardContent[cardContent.length - 1].element.classList.add("active");
    for (const todo of cardContent.slice(0, -1)) {
        todo.element.classList.add("inactive");
    }
}
