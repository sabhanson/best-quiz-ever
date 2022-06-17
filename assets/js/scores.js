var clearHSBtn = document.querySelector("#clear-hs");

function clearHS() {
  localStorage.removeItem("highscores");
}

clearHSBtn.addEventListener("click", clearHS);
