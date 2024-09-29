export default function createConfirm() {
    const container = document.createElement("div");
    container.classList.add("container-confirm");

    const paragraphe = document.createElement("p");
    paragraphe.textContent = "Voulez-vous vraiment tous supprimer ?";
    container.appendChild(paragraphe);

    const buttonYes = document.createElement("button");
    buttonYes.id = "yes";
    buttonYes.textContent = "Oui";
    container.appendChild(buttonYes)

    const buttonNo = document.createElement("button");
    buttonNo.id = "no";
    buttonNo.textContent = "Non !";
    container.appendChild(buttonNo)

    document.querySelector("nav").appendChild(container);
}