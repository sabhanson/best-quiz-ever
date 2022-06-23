// QUESTION AND ANSWERS ARRAY
var questionsAnswers = [
  {
    question: "What are my dogs' names?",
    choices: ["Red + MJ", "Robby + Marge", "Rusty + MJ", "Rufus + McDonald"],
    answer: "Red + MJ",
  },
  {
    question: "What is my fiance's name?",
    choices: ["Jayben", "Jason", "Jeremy", "Jacobie"],
    answer: "Jayben",
  },
  {
    question: "What is my favorite color?",
    choices: ["Red", "Blue", "Purple", "Green"],
    answer: "Green",
  },
  {
    question: "What is my favorite activity?",
    choices: ["Rollerblading", "Running", "Biking", "Rollerskating"],
    answer: "Biking",
  },
  {
    question: "How do I like my coffee?",
    choices: [
      "Iced with whipped cream",
      "Strong + a splash of oatmilk",
      "Black",
      "Lots of half + half",
    ],
    answer: "Strong + a splash of oatmilk",
  },
];

// STARTING POINT FOR US TO ITERATE THROUGH THE QUESTIONANSWERS ARRAY
var arrayIndex = 0;

// TIMER ELEMENT AND STARTING TIME VARIABLE
var timerEl = document.querySelector("#timer");
var secondsLeft = 60;

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
  showQuestions();
  // start the timer
  startTimer();
}

function showQuestions() {
  var questionEl = document.querySelector("#question");

  questionEl.textContent = questionsAnswers[arrayIndex].question;

  for (let i = 0; i < questionsAnswers[arrayIndex].choices.length; i++) {
    var liEl = document.createElement("li");
    var buttonEl = document.createElement("button");

    var answerText = questionsAnswers[arrayIndex].choices[i];

    buttonEl.textContent = answerText;
    var answerDiv = document.querySelector("#answers-container");

    liEl.appendChild(buttonEl);
    answerDiv.appendChild(liEl);
  }
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
