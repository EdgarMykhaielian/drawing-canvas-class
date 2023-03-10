export { switchTheme };

function switchTheme(dc){
    //Toggle canvas theme
const switcher = document.getElementById("themeSwitch");
switcher.addEventListener("click", () => {
    const currentColor = dc.canvas.style.background;
    if (currentColor === "rgb(42, 44, 53)") {
        dc.canvas.style.background = "#F6F4F1";
    } else {
        dc.canvas.style.background = "rgb(42, 44, 53)";
    }
});
}