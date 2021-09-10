const inputs = document.querySelectorAll(".angle-input");
const istriangleBtn = document.querySelector("#is-triangle-btn");
const output = document.querySelector("#output");

function sumOfAngles(angle1, angle2, angle3){
    return angle1 + angle2 + angle3;
}

function isTriangle(){
    const angleSum = sumOfAngles(Number(inputs[0].value), Number(inputs[1].value), Number(inputs[2].value));
    if (angleSum === 180){
        output.innerText = "The angles form a triangle.";
    }
    else{
        output.innerText = "The angles do not form a triangle.";
    }
}


istriangleBtn.addEventListener('click', isTriangle);