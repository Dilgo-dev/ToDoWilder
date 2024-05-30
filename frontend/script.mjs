import createCard from "./assets/script/createCard.mjs";
const main = document.querySelector("main");
const cardContent = [];

function getSavedCard() {
    const saved = JSON.parse(localStorage.getItem("todos"));

    if (!saved) return;
    for (const todo of saved) {
        const card = createCard(todo.title);
        cardContent.push({ title: todo.title, element: card });
        main.appendChild(card)
    }
    cardContent[cardContent.length - 1].element.classList.add("active");
    for (const todo of cardContent.slice(0, -1)) {
        todo.element.classList.add("inactive");
    }
}

getSavedCard();

const addCard = document.querySelector("div.add");

addCard.addEventListener("click", () => {
    // Recupère le titre de la carte
    const result = prompt("Titre de la nouvelle carte")
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
})
