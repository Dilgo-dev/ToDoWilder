export default function createTodo(container) {
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
        if (inputCheck.checked) {
            inputCheck.disabled = true;
            label.contentEditable = false;
            label.style.textDecoration = "line-through";
            console.log(label);
        }
    });


}