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
var body = document.body;
var seconds = 60;
//create button element in .html and assign id
//create button variable for the id
var btn = document.getElementById("btn");
//when btn is clicked I want timer to start and the first question to appear
//add click event to btn. create function for what happens (timer/question) when btn is clicked
btn.addEventListener("click", countDown);
//maybe use math object from module 3 for timer. OR use set interval?
function countDown(event) {
    var time = 
    
    

    console.log("i was clicked");
}
//don't forget to call/start countdown
countDown();


    
    

   


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




