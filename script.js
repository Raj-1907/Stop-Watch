const startBtn = document.querySelector("#startBtn");
const stopBtn = document.querySelector("#stopBtn");
const resetBtn = document.querySelector("#resetBtn");

// variable for time values

let sec = 0;
let min = 0;
let hrs = 0;
//  leading variables
leadingSec = 0;
leadingMin = 0;
leadingHrs = 0;

// variables for set interval
timerStatus = "stopped";
timerInterval = null;

//  stop watch Function

function stopWatch() {
  sec++;

  if (sec / 60 === 1) {
    sec = 0;
    min++;
    if (min / 60 === 1) {
      min = 0;
      hrs++;
    }
  }
  if (sec < 10) {
    leadingSec = "0" + sec.toString();
  } else {
    leadingSec = sec;
  }
  if (min < 10) {
    leadingMin = "0" + min.toString();
  } else {
    leadingMin = min;
  }
  if (hrs < 10) {
    leadingHrs = "0" + hrs.toString();
  } else {
    leadingHrs = hrs;
  }

  let displayTime = (document.getElementById("timer").innerText =
    leadingHrs + ":" + leadingMin + ":" + leadingSec);
}

// window.setInterval(stopWatch, 10);

startBtn.addEventListener("click", function () {
  if (timerStatus === "stopped") {
    timerInterval = window.setInterval(stopWatch, 1000);
    document.getElementById("startBtn");
    timerStatus = "started";
  }
});
stopBtn.addEventListener("click", function () {
  window.clearInterval(timerInterval);
  document.getElementById("stopBtn");
  timerStatus = "stopped";
});

resetBtn.addEventListener("click", function () {
  window.clearInterval(timerInterval);
  sec = 0;
  min = 0;
  hrs = 0;
  document.getElementById("timer").innerHTML = "00:00:00";
});
