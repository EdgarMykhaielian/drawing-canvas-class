export { getColor };

function getColor() {
    const colorPicker = document.getElementById("colorPicker");
    return colorPicker.value;
}
