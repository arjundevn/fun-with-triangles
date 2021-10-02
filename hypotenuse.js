const sides = document.querySelectorAll('.side-input');
const submitAnswer = document.querySelector('#submit-answer-btn');
const outputEl = document.querySelector('#output');

function sumOfSquares(a, b) {
    const sumOfSquares = a*a + b*b;
    return sumOfSquares;
}

function calculateHypotenuse() {
    const finalResult = sumOfSquares(Number(sides[0].value), Number(sides[1].value));
    const lengthOfHypo = Math.sqrt(finalResult);
    outputEl.innerText = "The length of hypotenuse is: " + lengthOfHypo;
}

submitAnswer.addEventListener('click', calculateHypotenuse);