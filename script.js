let timer;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let display = document.getElementById("display");

function startStopwatch() {
    clearInterval(timer);
    timer = setInterval(function() {
        milliseconds += 10;
        if (milliseconds === 1000) {
            milliseconds = 0;
            seconds++;
            if (seconds === 60) {
                seconds = 0;
                minutes++;
            }
        }
        display.innerHTML = (minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds < 10 ? "0" + seconds : seconds) + ":" + (milliseconds < 100 ? (milliseconds < 10 ? "00" + milliseconds : "0" + milliseconds) : milliseconds);
    }, 10);
}

function pauseStopwatch() {
    clearInterval(timer);
}

function resetStopwatch() {
    clearInterval(timer);
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    display.innerHTML = "00:00:00";
}
