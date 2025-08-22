let timerDisplay = document.querySelector(".timerDisplay");
let start = document.getElementById("startBtn");
let stop = document.getElementById("stopBtn");
let reset = document.getElementById("resetBtn");

let msec = 0;
let secs = 0;
let mins = 0;

let timerId = null;

start.addEventListener("click", () => {
  if (timerId !== null) {
    clearInterval(timerId);
  }
  timerId = setInterval(startTimer, 10);
});

stop.addEventListener("click", () => {
  clearInterval(timerId);
});

reset.addEventListener("click", () => {
  clearInterval(timerId);
  timerDisplay.innerHTML = `00 : 00 : 00`;
  mins = secs = msec = 0;
});

function startTimer() {
  msec++;
  if (msec == 100) {
    msec = 0;
    secs++;
    if (secs == 60) {
      secs = 0;
      mins++;
    }
  }

  let msecString = msec < 10 ? `0${msec}` : msec;
  let secsString = secs < 10 ? `0${secs}` : secs;
  let minsString = mins < 10 ? `0${mins}` : mins;

  timerDisplay.innerHTML=`${minsString} : ${secsString} : ${msecString}`
}
