var myQuiz = $("#quizContainer");
var secondsElapsed = questions.length * 15;
var timer;
var userAnswer = [];
var answer = questions[answer];

//for loop to go thru the questions.
//does this need to be inside the timer function?
//or is the timer inside the for loop??

function startTimer() {
  timer = setInterval(function() {
    secondsElapsed -= 1;
    console.log(secondsElapsed);
    document.getElementById("quizContainer").textContent = secondsElapsed;
    //Append Timer to header!!^^^^

    //**Does the While loop go here?? */

    if (secondsElapsed === 0) {
      clearInterval(timer);
      console.log("Time's Up");
    }
  }, 10);
}
console.log(questions);

document.getElementById("startQuiz").addEventListener("click", startTimer);

//----------------------------------------------------------------------------

//------> While Loop to move thru questions
// while (i < questions.length) {
// var i = 0;
//   if (userAnswer === answer) {
//     //Add 15 second to timer and move to the next question !!!!!! <-------
//   } else userAnswer !== answer;
//   {
//     //take 5 second off timer and move to the next question!! <------
//   }
// }
// //Append questions to questionContainer <--------

//------> Have questions show up in #card-body
//------> Question goes in .theQuestion
//------> Answer array goes in .firstChoice, .secondChoice, .thirdChoice, .fourthChoice

//Store user answer to local storage <---------
userAnswer[0];
localStorage.setItem("userAnswer", JSON.stringify(userAnswer));
