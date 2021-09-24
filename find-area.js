const sideInputs = document.querySelectorAll(".side-input");
const findAreaBtn = document.querySelector("#find-area");
const output = document.querySelector("#output");

function validateInput(side1, side2){
    if(side1<=0 || side2<=0){
        alert("Please enter values greater than 0");
        return false;
    }
    return true;
}
function findArea(){
    var validate = validateInput(sideInputs[0].value, sideInputs[1].value)
    if (validate){
        const area = (0.5*sideInputs[0].value*sideInputs[1].value).toFixed(2);
        output.innerText = "The area is "+area+" units squared.";
    }
}

findAreaBtn.addEventListener('click', findArea);