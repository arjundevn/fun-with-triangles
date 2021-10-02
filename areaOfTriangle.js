const sides = document.querySelectorAll('.triangle-input');
const submitAnswer = document.querySelector('#submit-answer-btn');
const outputEl = document.querySelector('#output');

function calculateAreaOfTriangles(base, height) {
    const area = 0.5 * base * height;
    return area;
}

function areaOfTriangle() {
    const areaOfTriangle = calculateAreaOfTriangles(Number(sides[0].value), Number(sides[1].value));
    outputEl.innerText = 'Area of your triangle is: ' + areaOfTriangle;
}

submitAnswer.addEventListener('click', areaOfTriangle);
