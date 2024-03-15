// Triangle
function calculateTriangleArea() {
    // get base value
    const getBase = document.getElementById('base-value');
    const baseValue = getBase.value;
    const value = parseFloat(baseValue);

    // get height value
    const getHeight = document.getElementById('height-value');
    const heightValue = getHeight.value;
    const height = parseFloat(heightValue);

    const area = 0.5 * value * height;

    // show triangle area
    const getArea = document.getElementById('area');
    getArea.innerText = area;

}

// Rectangle
function calculateRectangleArea() {
    // get width value
    const widthValue = document.getElementById('rectangle-width').value;
    const rectangleWidth = parseFloat(widthValue);

    // get height value
    const heightValue = document.getElementById('rectangle-height').value;
    const rectangleHeight = parseFloat(heightValue);

    const rectangleArea = rectangleWidth * rectangleHeight;

    const area = document.getElementById('rectangle-area-value');
    area.innerText = rectangleArea;
}

// Ellipse
function calculateEllipseArea(){
    const majorInput = getInputField('ellipse-large');
    const minorInput = getInputField('ellipse-short');
    const area = 3.14 * majorInput * minorInput;
    setElementText('ellipse-area-value', area);
}

// reuseable function / reduce code

function calculateParallelogramArea() {
    const width = getInputField('parallelogram-width');
    const height = getInputField('parallelogram-height');
    const area = width * height;
    setElementText('parallelogram-area-value', area)
}

function getInputField(inputId) {
    const inputField = document.getElementById(inputId);
    const inputFieldText = inputField.value;
    const inputValue = parseFloat(inputFieldText);
    return inputValue;
}

function setElementText(elementId, area) {
    const elementText = document.getElementById(elementId);
    elementText.innerText = area;
}