let timer;
let timeRemaining = 300; // Set the initial countdown time in seconds

function updateTimerDisplay() {
    const hours = Math.floor(timeRemaining / 3600);
    const minutes = Math.floor((timeRemaining % 3600) / 60);
    const seconds = timeRemaining % 60;
    document.getElementById('timer').innerText = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

function startTimer() {
    if (!timer) {
        timer = setInterval(function () {
            if (timeRemaining > 0) {
                timeRemaining--;
                updateTimerDisplay();
            } else {
                stopTimer();
            }
        }, 1000);
        toggleButtons(true);
    }
}

function stopTimer() {
    clearInterval(timer);
    timer = null;
    toggleButtons(false);
}

function resetTimer() {
    stopTimer();
    timeRemaining = 300; // Reset the timer to the initial time
    updateTimerDisplay();
}

function restartTimer() {
    resetTimer();
    startTimer();
}

function toggleButtons(disabled) {
    document.querySelectorAll('.control-btn').forEach(button => {
        button.disabled = disabled;
    });
}

updateTimerDisplay(); // Initial display setup
