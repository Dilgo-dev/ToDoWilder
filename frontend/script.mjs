import createCard from "./assets/script/createCard.mjs";

createCard("Groceries");

/*when using hover above card input, we shoud be able to see the bin which will be used to delete the task*/

// step 1- create a tableau with all the label from document
const labelTable = document.querySelectorAll("label");
// step 2- convert into table
const labels = [...labelTable];
console.log(labels);
// step 3- select label upon hover
labels.forEach((label) => {
    label.addEventListener("mouseover", () => {
        // step 4- read textcontent and make label active
        const activeLabel = label.textContent;
        label.classList.add("actif");
        label.style.position = "relative";
        console.log(label);
        // step 5- upon hovering add a small image of bin next to label . it should show only once therefore if class bin exist. it should stop adding a new bin.
        if (!label.querySelector(".bin")) {
            const bin = document.createElement("img");
            bin.src = "assets/icon/delete.svg";
            bin.alt = "bin";
            bin.classList.add("bin");
            label.appendChild(bin);
            // step 6- add image style
            bin.style.cursor = "pointer";
            bin.style.width = "20px";
            bin.style.backgroundColor = "red";
            bin.style.position = "absolute";
            bin.style.right = "-8rem";
        };
        console.log(label);

        // step 7- add event listener to bin
        label.querySelector(".bin").addEventListener("click", () => {
            // step 8- remove label and checkbox from parent
            label.parentNode.remove();
            // remove bin image, label relative position and label class"actif"
            label.querySelector(".bin").remove();
            label.classList.remove("actif");
            label.style.position = "";

            console.log(label.parentNode);
        });

    });
});









