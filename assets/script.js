var startBtn = document.querySelector(".start-btn");

var timerEl = setInterval(function() {
    if (timerEl > 0) {
        document.getElementById("timer").innerHTML = " secs left";
    } else (timerEl === 0) {
        document.getElementById("timer").innerHTML = "Time's Up!";
        clearInterval();
    } 
}, 1000);

var startQuiz = function(event) {
    // var firstQuestion = document.createElement("p");
    // firstQuestion.innerHTML = "What is the use of setInterval()?"
}

startBtn.addEventListener("click", startQuiz);
