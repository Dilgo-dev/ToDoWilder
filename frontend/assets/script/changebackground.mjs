export default function changebackground() {
    const waveColors = document.querySelectorAll('.wave');

    const tabWavecolors = [
        {
            name: "aurora",
            color: "linear-gradient(315deg, #24fd7e7e 10%, #00e5e97c 60%)"
        },
        {
            name: "orchid",
            color: "linear-gradient(315deg, #b931e27e 10%, #ff7f0877 60%)"
        },
        {
            name: "corail",
            color: "linear-gradient(315deg, #00fff2a4 10%, #fc38387e 60%)"
        },
        {
            name: "marigold",
            color: "linear-gradient(315deg, #ff39647e 10%, #ffe60077 60%)"
        },
        {
            name: "azurin",
            color: "linear-gradient(315deg, #4cffe17c 3%, #3988ff7e 38%, #0400ff77 68%)"
        },
        {
            name: "amethyste",
            color: "linear-gradient(315deg, #d2bcd47e 10%, #d35eeb77 60%)"
        }
    ];

    tabWavecolors.forEach(tabWavecolor => {
        const menuBack = document.querySelector(`a.menu-back.${tabWavecolor.name}`);
        menuBack.addEventListener('click', () => {
            waveColors.forEach(waveColor => {
                waveColor.style.background = tabWavecolor.color;
                waveColor.dataset.colorwave = tabWavecolor.color;
            });
        });
    });

    console.log("changebackground function executed");
}

// Appelez la fonction pour qu'elle soit exécutée
changebackground();
