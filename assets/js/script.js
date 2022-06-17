var timerEl = document.querySelector("#timer");
var secondsLeft = 6;

// BUTTONS
var startQuizBtn = document.querySelector("#start-quiz");
var submitHSBtn = document.querySelector("#submit");

var titleScreen = document.querySelector("main");
var quizBox = document.querySelector("#quiz-box");
var endScreen = document.querySelector("#end-screen");

function startQuiz() {
  // hide the title screen
  titleScreen.setAttribute("class", "hidden");
  // display the quiz box
  quizBox.removeAttribute("class", "hidden");
  // start the timer
  startTimer();
}

function startTimer() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timerEl.textContent = "Time: " + secondsLeft;

    if (secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image
      endQuiz();
    }
  }, 1000);
}

function submitHS(event) {
  event.preventDefault();
  window.location.href = "highscores.html";

  var hsInitials = document.querySelector("#hs-initials");
  var saveInitials = hsInitials.value;

  // when saving new HS to localstorage, need to retrieve previous value and store it in a temporary array, then push the new value to the end and repush it to localstorage

  localStorage.setItem("highscores", saveInitials);
}

function clearHS() {
  console.log("cleared");
  localStorage.removeItem("highscores");
}

function endQuiz() {
  quizBox.setAttribute("class", "hidden");
  endScreen.removeAttribute("class", "hidden");
}

startQuizBtn.addEventListener("click", startQuiz);
submitHSBtn.addEventListener("click", submitHS);
