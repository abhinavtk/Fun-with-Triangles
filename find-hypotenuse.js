const angles = document.querySelectorAll(".side-input");
const findHypotenuseBtn = document.querySelector("#find-hypotenuse");
const output = document.querySelector('#output');

function sumOfSquares(a, b){
    return a**2 + b**2;
}

function findHypotenuse(){
    const sumofSq = sumOfSquares(angles[0].value, angles[1].value);
    const hypotenuse = Math.sqrt(sumofSq);
    const hyp = hypotenuse.toFixed(2);
    output.innerText = "Hypotenuse length is "+ hyp+ " units.";
}

findHypotenuseBtn.addEventListener('click', findHypotenuse);