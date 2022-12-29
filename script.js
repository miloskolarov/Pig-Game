"use strict";

// Select the elements:
const score0El = document.querySelector("#score--0");
const score1El = document.querySelector("#score--1");
const current0El = document.querySelector("#current--0");
const current1El = document.querySelector("#current--1");

const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

// Set initial state:
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");

let currentScore = 0;

// Roll the die
btnRoll.addEventListener("click", function () {
  // 1. Generate a random die roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);
  // 2. Display die
  diceEl.classList.remove("hidden");
  diceEl.src = `dice-${dice}.png`;
  // 3. Chech for rolled 1, it 1 switch to the next player
  if (dice !== 1) {
    // Add to score
    currentScore = currentScore + dice;
    current0El.textContent = currentScore; /* CHANGE!*/
  } else {
    // switch to the next player
  }
});
