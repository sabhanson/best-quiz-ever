// TIMER ELEMENT AND STARTING TIME VARIABLE
var timerEl = document.querySelector("#timer");
var secondsLeft = 1;

// BUTTONS
var startQuizBtn = document.querySelector("#start-quiz");
var submitHSBtn = document.querySelector("#submit");

// QUIZ CONTAINER ELEMENTS
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

  // need to have an array available to parse and stringify the data since it's an array of objects we're storing in local storage, if local storage has data we will add on to it, if not then we will start with an empty array
  var hsArray = JSON.parse(localStorage.getItem("highscores")) || [];

  // grabbing the form element here to collect the user's initials
  var hsInitials = document.querySelector("#hs-initials");
  var saveInitials = hsInitials.value;

  // object to save each new score
  var newScore = {
    score: secondsLeft,
    initials: saveInitials,
  };

  // push the newScore to the array
  hsArray.push(newScore);
  // stringify and save the array to localstorage
  localStorage.setItem("highscores", JSON.stringify(hsArray));
}

function endQuiz() {
  quizBox.setAttribute("class", "hidden");
  endScreen.removeAttribute("class", "hidden");
}

startQuizBtn.addEventListener("click", startQuiz);
submitHSBtn.addEventListener("click", submitHS);
