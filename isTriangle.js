const inputs = document.querySelectorAll('.angle-input');
const isTriangleBtn = document.querySelector('#is-triangle-btn');
const outputEl = document.querySelector('#output');

function calculateSumOfTriangles(angle1, angle2, angle3) {
    const sumOfAngles = angle1 + angle2 + angle3;
    return sumOfAngles;
}

function isTriangle() {
    const sumOfAngles = calculateSumOfTriangles(Number(inputs[0].value), Number(inputs[1].value), Number(inputs[2].value));
    if(sumOfAngles == 180) {
        outputEl.innerText = 'Yay, the angles form a triangle';
    } else {
        outputEl.innerText = 'Oh Oh!, the angles do not form a triangle';
    }
}

isTriangleBtn.addEventListener('click', isTriangle);