function goToFirstPlaceInDOM(cardContainer, card) {
    cardContainer.removeChild(card);
    cardContainer.insertBefore(card, cardContainer.firstChild);
}

function goToLastPlaceInDOM(cardContainer, card) {
    cardContainer.removeChild(card);
    cardContainer.appendChild(card);
}

function goToPlaceInDOM(cardContainer, card, newIndex) {
    const children = cardContainer.children;
    cardContainer.removeChild(card);
    cardContainer.insertBefore(card, children[newIndex]);
}

function goToFirstPlaceInArray(array, index) {
    const element = array[index];
    array.splice(index, 1);
    array.unshift(element);
}

function goToPlaceInArray(array, index, newIndex) {
    const element = array[index];
    array.splice(index, 1);
    array.splice(newIndex, 0, element);
}

function goToLastPlaceInArray(array, index) {
    const element = array[index];
    array.splice(index, 1);
    array.push(element);
}

export default function nextCard(cardContainer, cardContent) {
    const newIndex = cardContent.length - 2;
    const oldIndex = cardContent.length - 1;
    const newActiveCard = cardContent[newIndex];
    const oldActiveCard = cardContent[oldIndex];

    if (!newActiveCard.element) return;
    if (!oldActiveCard.element) return;

    goToLastPlaceInDOM(cardContainer, newActiveCard.element);
    goToFirstPlaceInDOM(cardContainer, oldActiveCard.element);
    goToLastPlaceInArray(cardContent, newIndex);
    goToFirstPlaceInArray(
        cardContent,
        cardContent.findIndex((element) => element.title === oldActiveCard.title)
    );

    newActiveCard.element.classList.remove("inactive");
    newActiveCard.element.classList.add("active");
    oldActiveCard.element.classList.remove("active");
    oldActiveCard.element.classList.add("inactive");
    console.log(cardContent);
}

export function prevCard(cardContainer, cardContent) {
    console.log(cardContainer.children);
    const newIndex = 0;
    const oldIndex = cardContent.length - 1;
    const newActiveCard = cardContent[newIndex];
    const oldActiveCard = cardContent[oldIndex];

    if (!newActiveCard.element) return;
    if (!oldActiveCard.element) return;

    goToLastPlaceInDOM(cardContainer, newActiveCard.element);
    goToPlaceInDOM(cardContainer, oldActiveCard.element, cardContent.length - 2);
    goToLastPlaceInArray(cardContent, newIndex);
    goToPlaceInArray(
        cardContent,
        cardContent.findIndex((element) => element.title === oldActiveCard.title),
        cardContent.length - 2
    );

    newActiveCard.element.classList.remove("inactive");
    newActiveCard.element.classList.add("active");
    oldActiveCard.element.classList.remove("active");
    oldActiveCard.element.classList.add("inactive");
}
