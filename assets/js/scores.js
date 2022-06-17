var clearHSBtn = document.querySelector("#clear-hs");
var scoresList = document.querySelector(".scores");

function displayHS() {
  var hsData = JSON.parse(localStorage.getItem("highscores")) || [];

  console.log(hsData);

  hsData.forEach(function (hsData) {
    var li = document.createElement("li");
    li.textContent = hsData.initials + " - " + hsData.score;

    scoresList.appendChild(li);
  });

  // retrieve data from localstorage
  // make an li and append to the scoresList
}

function clearHS() {
  localStorage.removeItem("highscores");
  window.location.reload();
}

clearHSBtn.addEventListener("click", clearHS);

displayHS();
