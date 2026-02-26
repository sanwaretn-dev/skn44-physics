let score = 0;
let timeLeft = 60;
let timer;
let isRunning = false;

function startGame() {
    if (isRunning) return;

    isRunning = true;
    score = 0;
    timeLeft = 60;

    document.getElementById("score").textContent = score;
    document.getElementById("time").textContent = timeLeft;

    timer = setInterval(() => {
        timeLeft--;
        document.getElementById("time").textContent = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timer);
            isRunning = false;
            alert("หมดเวลา! คะแนนของคุณคือ " + score);
        }
    }, 1000);
}

function addScore() {
    if (!isRunning) return;
    score++;
    document.getElementById("score").textContent = score;
}
