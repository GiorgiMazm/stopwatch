// 'start' create buttons for stopwatch

const reset = document.querySelector(".watch__reset");
const start = document.querySelector(".watch__start");
const cont = document.querySelector(".watch__cont");
const stop = document.querySelector(".watch__stop");

// 'end' create buttons for stopwatch

// event for 'start' button

start.addEventListener("click", () => {
  start.classList.add("hidden");
  reset.classList.remove("hidden");
  stop.classList.remove("hidden");
  //   show / hidden button adter click

  watcher(true);
  //   start timer function after click
});

// 'end' event for 'start' button

// 'start' event for 'reset' button

reset.addEventListener("click", () => {
  start.classList.remove("hidden");
  reset.classList.add("hidden");
  stop.classList.add("hidden");
  cont.classList.add("hidden");
  //   show / hidden button adter click

  watcher(false);
  //   stop timer function after click

  //   reset all values of time
  milySecondCounter = 0;
  secondCounter = 0;
  minutCounter = 0;

  // sent  reseted values to stopwatch
  second.innerText = "0" + secondCounter;
  milySecond.innerText = "0" + milySecondCounter;
  minut.innerText = "0" + minutCounter;
});

// 'end' event for 'reset' button

// 'start' event for 'contiious' button

cont.addEventListener("click", () => {
  cont.classList.add("hidden");
  stop.classList.remove("hidden");
  //   show / hidden button adter click

  watcher(true);
  //   start timer function after click
});

// 'end' event for 'contiious' button

//  'start' event for 'stop' button

stop.addEventListener("click", () => {
  cont.classList.remove("hidden");
  stop.classList.add("hidden");

  watcher(false);
  //   stop timer function after click
});

//  'end' event for 'stop' button

// 'end' events for all button

const milySecond = document.querySelector(".watch__mili-second");
const second = document.querySelector(".watch__second");
const minut = document.querySelector(".watch__minut");

let milySecondCounter = 0;
let secondCounter = 0;
let minutCounter = 0;

// create counters for sec min and milsec

let timer;

const watcher = bool => {
  if (bool) {
    timer = setInterval(() => {
      milySecondCounter++;

      if (milySecondCounter > 99) {
        milySecondCounter = 0;
        secondCounter++;

        if (secondCounter > 59) {
          minutCounter++;
          secondCounter = 0;
        }
      }

      if (secondCounter > 9) {
        second.innerText = secondCounter;
      } else second.innerText = "0" + secondCounter;

      if (milySecondCounter > 9) {
        milySecond.innerText = milySecondCounter;
      } else milySecond.innerText = "0" + milySecondCounter;

      if (minutCounter > 9) {
        minut.innerText = minutCounter;
      } else minut.innerText = "0" + minutCounter;
    }, 10);
  } else {
    clearInterval(timer);
  }
};

// interval for stopwatch
