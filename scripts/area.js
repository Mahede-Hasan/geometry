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