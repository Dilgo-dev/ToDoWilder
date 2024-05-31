import { getCounter, updateCounter } from "./createCard.mjs";

export default function createTodo(container, card) {
    const div = document.createElement("div");
    container.append(div);
    const inputCheck = document.createElement("input");
    inputCheck.type = "checkbox";
    div.appendChild(inputCheck);
    const label = document.createElement("label");
    label.textContent = "New Todo";
    label.contentEditable = true;
    div.appendChild(label);
    label.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            label.blur();
        }
    });

    label.focus();

    // ajouter un barre input
    inputCheck.addEventListener("click", () => {
        const { counterTodo, counterMaxTodo } = getCounter(card);
        if (inputCheck.checked) {
            label.contentEditable = false;
            label.style.textDecoration = "line-through";
            updateCounter(card, counterTodo + 1, counterMaxTodo);
        } else {
            label.contentEditable = true;
            label.style.textDecoration = "none";
            updateCounter(card, counterTodo - 1, counterMaxTodo);
        }
    });
}
