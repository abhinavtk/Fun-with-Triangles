const sideInputs = document.querySelectorAll(".side-input");
const findAreaBtn = document.querySelector("#find-area");
const output = document.querySelector("#output");

function findArea(){
    const area = (0.5*sideInputs[0].value*sideInputs[1].value).toFixed(2);
    output.innerText = "The area is "+area+" units squared.";
}

findAreaBtn.addEventListener('click', findArea);