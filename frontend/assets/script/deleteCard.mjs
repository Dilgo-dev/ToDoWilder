
import { cardContent, main, saveTodos } from "../../script.mjs";
import nextCard from "./nextCard.mjs";

export default function deleteCard(cardContainer) {
    const card = cardContent.findIndex((card) => card.element === cardContainer);

    cardContent.splice(card, 1);
    saveTodos();
    cardContainer.remove();
    nextCard(main, cardContent);
}