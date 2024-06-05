import nextCard from "./nextCard.mjs";
// fonction pour supprimer la carte active quand on clic sur l'image classe ".delete-svg"
export default function deleteCard(cardContainer) {
    if (cardContainer.classList.contains("active")) {
        cardContainer.remove();
    };

}
