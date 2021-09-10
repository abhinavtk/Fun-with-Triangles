const quizForm = document.querySelector(".quiz-form");
const submitBtn = document.querySelector("#submit-btn");
const output = document.querySelector("#output");

const correctAnswers =  ["90°", "5"];

function calculateScore() {
    let score = 0;
    let index = 0;
    const formResults = new FormData(quizForm);
    for(let value of formResults.values()){
        if (value===correctAnswers[index]){
            score+=1;
        }
        index+=1;
    }
    output.innerText = score;
}

submitBtn.addEventListener('click', calculateScore);