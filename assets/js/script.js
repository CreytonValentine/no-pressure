//quiz begins by pressing button
//quiz ends when all questions are answered or there is no time left
//start timer and display first question when button is pressed
//create button
//Use an array of multiple choice questions
//create a loop for the questions
//alert if question is answered correctly or incorrectly
//add score if answer is correct and reduce score if incorrect
//
var wrongAnswer = 3;
var correctAnswer = 2;
var time = 60;
var body = document.body;
var buttonEl = document.createElement("button");
buttonEl.textContent = "Begin Quiz";
body.appendChild(buttonEl);

//questions are appearing before button is clicked. gotta fix that
    //attempt to create buttonEl handler and move array and loop inside?
    //set time interval
var beginQuiz = function(time) {
    var startTimer = time - 1;
    buttonEl.addEventListener("click", startTimer);

    beginQuiz();
}

var questions = [
    {
        prompt: "Why are WEB API's useful?\n(a) Helps with time management\n\ (b) Allows you to learn Javascript quickly\n (c) Utilizes syntax that is less complicated",
        answer: "c"
    },
    {
        prompt: "console.log() can help developers to:\n(a) Debug code with web developer tools\n\ (b) Retrieve information from the web\n (c) Store information on the web",
        answer: "a"
    },
]
var score = 0;
for(var i=0; i < questions.length; i++) {
    var answers = window.prompt(questions[i].prompt)
    if(answers == questions[i].answer) {
        score++;
        alert("CORRECT!");
    }
    else {
        alert("INCORRECT!");
    }
}




