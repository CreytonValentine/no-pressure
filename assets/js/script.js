//click event for timer button
document.addEventListener("click", function() {
    var btn = document.createElement("button");
    btn.textContent = "Begin Quiz!";
    document.body.appendChild(btn);
})

//I know I need an array  of questions to loop through
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
//create score variable to modify score in loop
var score = 0
//loop
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



