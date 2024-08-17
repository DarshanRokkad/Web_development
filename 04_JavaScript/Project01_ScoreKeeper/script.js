const p1Score = document.querySelector("#p1Score");
const p2Score = document.querySelector("#p2Score");
const winningScoreSelect = document.querySelector("#winningScoreSelect")
const p1btn = document.querySelector("#p1Button");
const p2btn = document.querySelector("#p2Button");
const resetbtn = document.querySelector("#reButton");

let winningScore = parseInt(winningScoreSelect.value);
let isGameOver = false;

const p1 = {
    score: p1Score,
    button: p1btn
}

const p2 = {
    score: p2Score,
    button: p2btn
}

// Functions

function helper(player, opponent) {
    if (!isGameOver) {
        let currentScore = parseInt(player.score.innerText);
        if (currentScore !== winningScore) {
            const nextScore = currentScore + 1;
            player.score.innerText = nextScore;
            if (nextScore === winningScore) {
                isGameOver = true;
                player.score.classList.add('has-text-success');
                opponent.score.classList.add('has-text-danger');
                player.button.disabled = true;
                opponent.button.disabled = true;
            }
        }
    }
}

function resetScore() {
    p1Score.innerText = 0;
    p2Score.innerText = 0;
    p1Score.classList.remove("has-text-success", "has-text-danger");
    p2Score.classList.remove("has-text-success", "has-text-danger");
    isGameOver = false;
    p1btn.disabled = false;
    p2btn.disabled = false;
}

// Event Listeners

winningScoreSelect.addEventListener(
    "change", () => {
        winningScore = parseInt(winningScoreSelect.value);
        resetScore();
    }
)

p1btn.addEventListener(
    "click", () => { helper(p1, p2); }
)

p2btn.addEventListener(
    "click", () => { helper(p2, p1); }
)

resetbtn.addEventListener(
    "click", resetScore
)