export { getColor };
export { getThickness };

function getColor() {
    const colorPicker = document.getElementById("colorPicker");
    return colorPicker.value;
}

function getThickness() {
    const rangeInput = document.querySelector('input[type="range"]');
    return rangeInput.value;
}
