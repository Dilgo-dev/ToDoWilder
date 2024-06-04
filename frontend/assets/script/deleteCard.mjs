

// fonction pour supprimer la carte active quand on clic sur l'image classe ".delete-svg"
export default function deleteCard(main) {
    const cardActive = main.querySelector(".active");
    const cardToDelete = cardActive.querySelector(".delete-svg");
    cardToDelete.addEventListener("click", () => {
        cardActive.remove();
    })
}
deleteCard(main);