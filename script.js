var myQuiz = $("#quizContainer");
var secondsElapsed;
var timer;
var userAnswer;
var answer = questions[answer];
var currentTime = timer - secondsElapsed;
var currentIndex = 0;

//does this need to be inside the timer function?
//or is the timer inside the for loop??

function startTimer() {
  displayQuestion();
  timer = setInterval(function() {
    secondsElapsed = questions.length * 15;
    secondsElapsed -= 1;
    console.log(secondsElapsed);
    // document.getElementById("quizContainer").textContent =
    //   "Time Remaining: " + secondsElapsed;
    // document.appendChild("#quizContainer");

    if (secondsElapsed === 0) {
      clearInterval(timer);
      console.log("Time's Up");
    }
  }, 10);
}

//display questions in the div

function displayQuestion() {
  var titleElement = document.createElement("h1");
  var currentQuestion = questions[currentIndex].title;
  titleElement.textContent = currentQuestion;

  console.log(titleElement);

  document.appendChild("#card-body").textContent(title[currentIndex]);
  var choices = document.createElement("button");
  document.appendChild("#card-body");
}

function addTime() {
  addTime = secondsElapsed + 15;
}

function removeTime() {
  removeTime = secondsElapsed - 5;
}

function isCorrectAnswer() {
  if (userAnswer === answer) {
    addTime();
  } else {
    removeTime();
  }
}

console.log(questions);

document.getElementById("startQuiz").addEventListener("click", startTimer);

//----------------------------------------------------------------------------
