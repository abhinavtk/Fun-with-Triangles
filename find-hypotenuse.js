const sides = document.querySelectorAll(".side-input");
const findHypotenuseBtn = document.querySelector("#find-hypotenuse");
const output = document.querySelector('#output');

function sumOfSquares(a, b){
    return a**2 + b**2;
}
function validateInput(side1, side2){
    if(side1<=0 || side2<=0){
        alert("Please enter values greater than 0");
        return false;
    }
    return true;
}
function findHypotenuse(){
    var validate = validateInput(sides[0].value, sides[1].value);
    if (validate){
        const sumofSq = sumOfSquares(sides[0].value, sides[1].value);
        const hypotenuse = Math.sqrt(sumofSq).toFixed(2);
        output.innerText = "Hypotenuse length is "+ hypotenuse+ " units.";
    } 
}

findHypotenuseBtn.addEventListener('click', findHypotenuse);