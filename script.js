let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;
let intervalId = null;
let isRunning = false;
let laps = [];

document.addEventListener("DOMContentLoaded", function() {
  const timeRef = document.querySelector(".timer");
  const startButton = document.querySelector("#start-timer");
  const resetButton = document.querySelector("#reset-timer");
  const pauseButton = document.querySelector("#pause-timer");
  const lapButton = document.querySelector("#lap-timer");

  startButton.addEventListener("click", startTimer);
  resetButton.addEventListener("click", resetTimer);
  pauseButton.addEventListener("click", pauseTimer);
  lapButton.addEventListener("click", lapTimer);

  function startTimer() {
    if (!isRunning) {
      intervalId = setInterval(displayTimer, 10);
      isRunning = true;
    }
  }

  function resetTimer() {
    clearInterval(intervalId);
    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;
    timeRef.innerHTML = "00:00:00:000";
    isRunning = false;
    laps = [];
    document.getElementById("laps").innerHTML = "";
  }

  function pauseTimer() {
    clearInterval(intervalId);
    isRunning = false;
  }

  function lapTimer() {
    if (isRunning) {
      const lapTime = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}:${milliseconds < 10 ? `00${milliseconds}` : milliseconds < 100 ? `0${milliseconds}` : milliseconds}`;
      laps.push(lapTime);
      const lapList = document.getElementById("laps");
      const lapElement = document.createElement("li");
      lapElement.textContent = lapTime;
      lapList.appendChild(lapElement);
    }
  }
  function resetlapTimer(){
    laps.innerHTML=""
  } 
  function displayTimer() {
    milliseconds += 10;
    if (milliseconds >= 1000) {
      milliseconds = 0;
      seconds++;
      if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
          minutes = 0;
          hours++;
        }
      }
    }

    const h = hours < 10 ? `0${hours}` : hours;
    const m = minutes < 10 ? `0${minutes}` : minutes;
    const s = seconds < 10 ? `0${seconds}` : seconds;
    const ms = milliseconds < 10 ? `00${milliseconds}` : milliseconds < 100 ? `0${milliseconds}` : milliseconds;

    timeRef.innerHTML = `${h}:${m}:${s}:${ms}`;
  }
});