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
    headerLeft.appendChild(titleElement);

    // Create parapraphe for the left header
    const paragraphe = document.createElement("p");
    paragraphe.innerHTML = "0 of 0 Tasks";
    headerLeft.appendChild(paragraphe);

    // Create right header element
    const headerRight = document.createElement("div");
    headerLeft.classList.add("right");
    header.appendChild(headerRight);

    // Create the edit image
    const edit = document.createElement("img");
    edit.src = "./assets/icon/edit.svg";
    edit.alt = "Edit button";
    headerRight.appendChild(edit);

    // Create main element
    const main = document.createElement("main");
    card.appendChild(main);

    // Create main left element
    const mainLeft = document.createElement("div");
    mainLeft.classList.add("left");
    main.appendChild(mainLeft);

    const containerInput = document.createElement("div");
    const input = document.createElement("input");
    input.type = "checkbox";
    input.id = "input1";
    containerInput.appendChild(input);
    const label = document.createElement("label");
    label.innerHTML = "Avocados";
    label.setAttribute("for", "input1");
    containerInput.appendChild(label);
    mainLeft.appendChild(containerInput);

    // Create main right element
    const mainRight = document.createElement("div");
    mainRight.classList.add("right");
    main.appendChild(mainRight);

    // Create the edit image
    const deleteImg = document.createElement("img");
    deleteImg.src = "./assets/icon/delete.svg";
    deleteImg.alt = "Delete button";
    mainRight.appendChild(deleteImg);

    document.querySelector("main").appendChild(card);
}
