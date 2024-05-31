export default function changeCard(cardContent, index) {
    if (!cardContent[index].element) return;
    cardContent[index].element.classList.remove("inactive");
    cardContent[index].element.classList.add("active");
}
