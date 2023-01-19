"use strict";

/* Basic terminology: 
console.log(document.querySelector(".welcome-message").textContent);

document.querySelector(".welcome-message").textContent =
  "Made by Abrar Mojahid Rafi :)";

console.log(document.querySelector(".welcome-message").textContent); */

// ==========================================
// ============== Let's start ===============
// ------------------------------------------

let randomGuessNumber = Math.trunc(Math.random() * 20 + 1);
// document.querySelector(".number").textContent = randomGuessNumber;

let highscore = 0;

document.querySelector(".check-button").addEventListener("click", function () {
  const userInput = Number(document.querySelector(".guess").value); // Here when anyone didn't put any numbers, but s/he clicked the check! button , then we get 0.

  console.log(userInput);

  if (!userInput) {
    // if user didn't put any numbers in the input box, but s/he hit the check button, then this condition will be executed. Because ZERO(0) is a falsy value, thats why, when we inplement this falsy value(!falsyValue), the condition will be True. And since it is a if statement, so when it becomes true, it will be executed.

    document.querySelector(".message").textContent = "Yet you put no number.";
  } else if (userInput === randomGuessNumber) {
    document.querySelector(".message").textContent =
      "Congratulations! It is the Correct Number.";

    document.body.style.backgroundColor = "lightblue";

    if (highscore < document.querySelector(".score").textContent) {
      highscore = document.querySelector(".score").textContent;
      document.querySelector(".highscore").textContent =
        document.querySelector(".score").textContent;
    }
  } else if (userInput > randomGuessNumber) {
    if (document.querySelector(".score").textContent > 0) {
      document.querySelector(".message").textContent = "It's too high.";
      document.querySelector(".score").textContent--;
    } else {
      document.querySelector(".message").textContent = "You lost the game!";
      document.querySelector(".score").textContent = 0;
    }
  } else {
    if (document.querySelector(".score").textContent > 0) {
      document.querySelector(".message").textContent = "It's too low.";
      document.querySelector(".score").textContent--;
    } else {
      document.querySelector(".message").textContent = "You lost the game!";
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again-button").addEventListener("click", function () {
  document.body.style.backgroundColor = "rgb(223, 240, 205)";

  randomGuessNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = 20;
  document.querySelector(".number").textContent = randomGuessNumber;
  document.querySelector(".guess").value = "";
});
