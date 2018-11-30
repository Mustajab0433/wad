var questions = [{
    question : "When a user views a page containing a JavaScript program, which machine actually executes the script?",
    choices : [ "The User's machine running a Web browser",
        "The Web server",
        "A central machine deep within Netscape's corporate offices",
        "None of the above"],
    correctAnswer : 0
},{
    question : "Which of the following can't be done with client-side JavaScript?",
    choices : [ "Validating a form",
        "Sending a form's contents by email",
        "Storing the form's contents to a database file on the server",
        "None of the above"],
    correctAnswer : 2
}, {
    question: "Using _______ statement is how you test for a specific condition",
    choices: ["select",
        "if",
        "for",
        "none of the above"],
    correctAnswer: 1
}, {
    question: "Which of the following type of variable is visible everywhere in your JavaScript code?",
    choices: ["select",
        "global variable",

        "local variable",

        "Both of the above.",

        "None of the above."],
    correctAnswer: 1,
},{
    question: "Which built-in method removes the last element from an array and returns that element?",
    choices: ["select",
        "last()",

        "get()",

        "pop()",

        "None of the above."],
         correctAnswer: 3,

}];

var currentQuestion = 0;
var correctAnswers = 0;
var quizOver = false;
displayCurrentQuestion();
document.getElementById("quiz-message").style.display = 'none';
function displayNext() {

    if(currentQuestion + 1 < questions.length)
    {
        var Answer = document.querySelector("input[type = radio]:checked");
        if(Answer == null)
        {
            var msg = document.getElementById("quiz-message");
            msg.style.color = 'red';
            msg.style.display = "block";
            msg.innerText = "Please....Select an option...";
        }
        else {
            var i;
            for (i = 0; i < questions[currentQuestion].choices.length; i++) {
                if (document.getElementById("i").checked) {
                    break;
                }
            }
            if (i === questions[currentQuestion].correctAnswer) {
                correctAnswers++;
            }
            currentQuestion++;
            displayCurrentQuestion();
        }
    }
    else
    {
        displayScore();
        quizOver = true;
    }




}


function displayCurrentQuestion() {


    for (var i = 0; i< questions[currentQuestion].choices.length; i++){
        document.getElementById("choice-list").innerHTML+='<li><input type = "radio" id="i" name="answers"' +
            ' value = i>'+ questions[currentQuestion].choices[i] + '</li>';
    }
    document.getElementById("question").innerHTML = questions[currentQuestion].question;

}

function resetQuiz() {
    currentQuestion = 0;
    correctAnswers = 0;
    hideScore();
}
function displayScore() {
    document.getElementById("result").innerHTML = "you scored: " + correctAnswers + " out of: " + questions.length;
    document.getElementById("result").style.display = 'block';
}
function hideScore() {
    document.getElementById("result").style.display = 'none';
}