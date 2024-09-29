export default function buttonsColor(container, card) {
  const tabColors = [
    {
      name: "--color-1",
      light: "#ffcccc", // Light color for background
      dark: "#cc0000"  // Dark color for header
    },
    {
      name: "--color-2",
      light: "#cceeff",
      dark: "#005580"
    },
    {
      name: "--color-3",
      light: "#ffffcc",
      dark: "#cccc00"
    },
    {
      name: "--color-4",
      light: "#e6ccff",
      dark: "#660099"
    },
    {
      name: "--color-5",
      light: "#ccffcc",
      dark: "#006600"
    },
    {
      name: "--color-6",
      light: "#ffcccc",
      dark: "#990000"
    },
    {
      name: "--color-7",
      light: "#dddddd",
      dark: "#666666"
    }
  ];

  const divColor = document.createElement('div');
  divColor.classList.add('container-color');
  container.appendChild(divColor);


  const buttonPalette = document.createElement('button');
  buttonPalette.classList.add('menu-button', 'icon-plus');
  divColor.appendChild(buttonPalette);

  const imageButton = document.createElement("img");
  imageButton.src = "./assets/icon/palette.svg";
  buttonPalette.appendChild(imageButton);

  const ulColor = document.createElement('ul');
  ulColor.classList.add("menu");
  divColor.appendChild(ulColor);

  tabColors.forEach(tabColor => {
    const liColor = document.createElement('li');
    liColor.classList.add('menu-item');
    liColor.style.backgroundColor = tabColor.light;
    liColor.dataset.light = tabColor.light;
    liColor.dataset.dark = tabColor.dark;
    ulColor.appendChild(liColor);

    liColor.addEventListener('click', (event) => {
      card.style.backgroundColor = tabColor.light;
      const header = card.querySelector('header');
      card.querySelector("header > .right > img").style.fill = tabColor.dark;
      header.style.color = tabColor.dark;
      card.dataset.lightColor = tabColor.light; // store the light color in the dataset
      card.dataset.darkColor = tabColor.dark; // store the dark color in the dataset
    });
  });

  buttonPalette.addEventListener('click', (event) => {
    event.preventDefault();
    ulColor.classList.toggle('open');
  });
}
