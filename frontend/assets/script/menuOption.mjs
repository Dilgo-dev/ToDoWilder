export default function menuOption(arrayOption) {
    console.log(arrayOption)
    const nav = document.querySelector("nav");
    const div = document.createElement("div");
    div.classList.add("option");
    nav.append(div);
    const select = document.createElement("select");
    select.classList.add("menuOption");
    div.appendChild(select);

    // boucle for selon les éléments
    // for...of sert à récupérer les éléments dans le tableau

    for (const element of arrayOption) {
        const option = document.createElement("option");
        option.value = element;
        option.innerHTML = element;
        select.appendChild(option)
    }

}

