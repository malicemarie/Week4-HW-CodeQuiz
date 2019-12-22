var myQuiz = $("#quizContainer");
var secondsElapsed = questions.length * 15;
var timer;
var userAnswer;
var answer = questions[answer];
var currentTime = timer - secondsElapsed;
var currentIndex = 0;
var startQuiz = document.getElementById("startQuiz");

startQuiz.onclick = startTimer;

function startTimer() {
  displayQuestion();

  timer = setInterval(function() {
    secondsElapsed -= 1;
    console.log(secondsElapsed);

    var timerDisplay = document.getElementById("theTimer");
    timerDisplay.textContent = secondsElapsed;

    if (secondsElapsed === 0) {
      clearInterval(timer);
      alert("Time's Up");
    }
  }, 1000);
}

//display questions in the div

function displayQuestion() {
  var titleElement = document.createElement("h1");
  var currentQuestion = questions[currentIndex].title;
  titleElement.textContent = currentQuestion;

  var cardHeader = document.getElementById("card-header");
  cardHeader.appendChild(titleElement);

  var choices = questions[currentIndex].choices;

  for (var i = 0; i < choices.length; i++) {
    var choicesElement = document.createElement("button");
    var cardBody = document.getElementById("card-body");
    cardBody.appendChild(choicesElement);
    choicesElement.textContent = choices[i];
    choicesElement.onclick = isCorrectAnswer;
  }

  //<------- If a user clicks a button move on to the next question

  console.log(choices);
}

function isCorrectAnswer() {
  var answer = questions[currentIndex].answer;
  userAnswer = this.innerHTML;

  if (userAnswer === answer) {
    addTime();
    console.log("answer correct");
  } else {
    removeTime();
    console.log("answer incorrect");
  }
}

function updateUserAnswer() {}

function addTime() {
  secondsElapsed += 15;
}

function removeTime() {
  secondsElapsed -= 5;
}

function getScore() {
  var userScore = userAnswer;
}

function saveScore() {}

console.log(questions);

//----------------------------------------------------------------------------
