import createCard from "./assets/script/createCard.mjs";

createCard("Groceries");


function hoverDelete() {
    /*  when hovering the label, we should see a bin and the bin will be used to remove label*/

    // get all the labels from the document
    const labels = document.querySelectorAll("label");

    // on hover select the label out of the others 
    labels.forEach(label => {

        // create a bin image which will be next to the label
        const bin = document.createElement("img");
        bin.setAttribute("src", "./assets/icon/delete.svg");
        bin.setAttribute("alt", "Delete button");
        label.appendChild(bin);
        label.style.display = "flex";
        label.style.gap = "5rem";

        // add style to button such as BG, distance from label
        bin.style.backgroundColor = "red"; // give a color to img
        bin.style.cursor = "pointer"; // switch the type of cursor when hovering on bin
        bin.style.display = "none"; // don't display bin until there is an add eventlistener to label

        // on hover the label show the bin
        label.addEventListener("mouseover", () => {
            bin.style.display = "block";
        });

        // when hovering out the label, hide the bin
        label.addEventListener("mouseout", () => {
            bin.style.display = "none";
        });

        // now add event on bin in order to delete item
        bin.addEventListener("click", () => {
            alert("clic");
        });
    })

}

// last step - call the function
hoverDelete();












