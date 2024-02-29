let WinPoints = 5;
let isGameOver = false;
const reset = document.querySelector("#ResetButton");
const select = document.querySelector("#matches");
const p1 = {
  score: 0,
  button: document.querySelector("#P1Button"),
  display: document.querySelector("#P1Score"),
};
const p2 = {
  score: 0,
  button: document.querySelector("#P2Button"),
  display: document.querySelector("#P2Score"),
};

const p1f = function (e) {
  updateScore(p1, p2);
};

const p2f = function (e) {
  updateScore(p2, p1);
};

const winScore = function (e) {
  WinPoints = parseInt(this.value);
};

const updateScore = function (player, opponent) {
  if (!isGameOver) {
    player.score += 1;
    if (player.score === WinPoints) {
      player.display.classList.add("has-text-success");
      opponent.display.classList.add("has-text-danger");
      player.button.disabled = true;
      opponent.button.disabled = true;
      isGameOver = true;
    }
    player.display.innerText = player.score;
  }
};

const resetf = function (e) {
  isGameOver = false;
  for (let p of [p1, p2]) {
    p.score = 0;
    p.display.innerText = 0;
    p.display.classList.remove("has-text-success", "has-text-danger");
    p.button.disabled = false;
  }
};

p1.button.addEventListener("click", p1f);
p2.button.addEventListener("click", p2f);
reset.addEventListener("click", resetf);
select.addEventListener("change", winScore);
