const input = document.querySelector("input");
const error = document.querySelector("p.error");
const button = document.querySelector("button");
const section = document.querySelector("section");

function createList(title) {
    // Créer les nouveaux éléments
    const listElement = document.createElement("div");

    // Set l'intérieur des balise
    listElement.className = "card";
    listElement.innerHTML = title;

    // Ajout d'élément dans les balises respectif
    section.appendChild(listElement);
}

function handleClick() {
    // Ajout d'un élément
    if (!input.value) {
        error.innerHTML = "Le nom de la liste est vide !";
        setTimeout(() => {
            error.innerHTML = "";
        }, 1000);
    } else {
        createList(input.value);
    }
    input.value = "";
}

button.addEventListener("click", handleClick);
