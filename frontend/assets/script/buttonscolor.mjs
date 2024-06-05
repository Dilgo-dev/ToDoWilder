export default function buttonColor(card) {
  //ETAPE 0 - rentrenscrice le html en js
  const tabColors = [
    {
      name: "--color-1",
      color: "#949494"
    },
    {
      name: "--color-2",
      color: "#0088d6"
    },
    {
      name: "--color-3",
      color: "#d6da00"
    },
    {
      name: "--color-4",
      color: "#8800e2"
    },
    {
      name: "--color-5",
      color: "#00a86d"
    },
    {
      name: "--color-6",
      color: "#a80000"
    },
    {
      name: "--color-7",
      color: "#dddddd7c"
    },

  ]
  const mainColor = document.querySelector('main');
  const divColor = document.createElement('div');

  divColor.classList.add('containColor');
  mainColor.appendChild(divColor);
  const ulColor = document.createElement('ul');
  ulColor.id = "menu";
  divColor.appendChild(ulColor);
  const aMenucolorPlus = document.createElement('a')
  aMenucolorPlus.classList.add('menu-button', 'icon-plus');
  aMenucolorPlus.id = "open-menu";
  aMenucolorPlus.href = "#menu";
  ulColor.appendChild(aMenucolorPlus);
  const aMenucolorMinus = document.createElement('a')
  aMenucolorMinus.classList.add("menu-button", "icon-minus");
  aMenucolorMinus.href = "#0"
  ulColor.appendChild(aMenucolorMinus);

  tabColors.forEach(tabColor => {
    //console.log("nom: " + tabColor.name + " couleur: " + tabColor.color);
    const liColor = document.createElement('li');
    liColor.classList.add('menu-item');
    ulColor.appendChild(liColor);
    const aMenuitemColor = document.createElement('a');
    aMenuitemColor.href = "#menu";
    liColor.appendChild(aMenuitemColor);
    const divMenuitemColor = document.createElement('div')
    divMenuitemColor.dataset.color = tabColor.color;
    aMenuitemColor.appendChild(divMenuitemColor);
  })





  console.log(mainColor);




  // --------------




  //ETAPE 1 - Tableau de couleur 
  // const colors = [""]
  // console.log("CA MARCHE");
  //ETAPE 2 - Deploiement des couleurs (quand tu click ca doit faire apparaitre toutes les couleurs)


  //ETAPE 3 - La selection d'une couleur (quand je click sur la couleur souhaiter j'applique la couleur sur la carte active)









}




// document.addEventListener('DOMContentLoaded', () => {
//     const colors = ['color-1', 'color-2', 'color-3', 'color-4', 'color-5', 'color-6'];
//     const container = document.querySelector('.radio-input');

//     colors.forEach(color => {
//         const wrapper = document.createElement('div');
//         wrapper.className = 'radio-wrapper';
//         wrapper.setAttribute('data-color', color);

//         const input = document.createElement('input');
//         input.type = 'radio';
//         input.name = 'color';
//         input.id = color;
//         input.value = color;
//         if (color === 'color-1') {
//             input.checked = true;
//         }

//         const label = document.createElement('label');
//         label.setAttribute('for', color);

//         const span = document.createElement('span');
//         const svg = `
//         <svg class="check-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//           <g stroke-width="0"></g>
//           <g stroke-linejoin="round" stroke-linecap="round"></g>
//           <g id="Interface / Check">
//             <path stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="#ffffff" d="M6 12L10.2426 16.2426L18.727 7.75732" id="Vector"></path>
//           </g>
//         </svg>
//       `;
//         span.innerHTML = svg;

//         label.appendChild(span);
//         wrapper.appendChild(input);
//         wrapper.appendChild(label);
//         container.appendChild(wrapper);
//     });
// });

// OBSOLETE, commenter pour inspiration!!!!!!!!!!!!!!!!!!!!!!!
