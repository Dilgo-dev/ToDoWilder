export default function changebackground() {
    const waveColors = document.querySelectorAll('.wave');

    const tabWavecolors = [
        {
            name: "aurora",
            color: "linear-gradient(315deg, #0fe90749 3%, #24fd7e7e 38%, #00e5e97c 68%, #008cff77 98%);"
        },
        {
            name: "orchid",
            color: "linear-gradient(315deg, #d36f357c 3%, #b931e27e 38%, #ff7f0877 68%, #6202fd49 98%);"
        },
        {
            name: "corail",
            color: "linear-gradient(315deg, #00fff2a4 3%, #fc38387e 38%, #a1f4ff7c 68%, #ff000077 98%);"
        },
        {
            name: "marigold",
            color: "linear-gradient(315deg, #f1ef547c 3%, #ff39647e 38%, #ffe60077 68%, #ff004049 98%);"
        },
        {
            name: "azurin",
            color: "linear-gradient(315deg, #4cffe17c 3%, #3988ff7e 38%, #0400ff77 68%, #4200be49 98%);"
        },
        {
            name: "amethyste",
            color: "linear-gradient(315deg, #f5a7ff7c 3%, #d2bcd47e 38%, #d35eeb77 68%, #f2c9f3c0 98%);"
        }
    ];

    tabWavecolors.forEach(tabWavecolor => {
        const menuBack = document.querySelector(`a.menu-back.${tabWavecolor.name}`);
        menuBack.addEventListener('click', () => {
            waveColors.forEach(waveColor => {
                waveColor.setAttribute("style", "background: " + tabWavecolor.color);
                console.log(tabWavecolor.color);
                console.log(waveColor)
            });
        });
    });

    console.log("changebackground function executed");
}
