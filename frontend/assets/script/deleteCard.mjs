/* Function to delete the selected card*/
const deleteCard = () => {
    // select the bin on the active card 
    const binRemove = main.querySelector(".right > img");
    // add event listener
    binRemove.addEventListener("click", () => {
        const deleteCard = main.querySelector(".active");
        main.removeChild(deleteCard);
        console.log(main);
    });

}

// last step - call the function
deleteCard();