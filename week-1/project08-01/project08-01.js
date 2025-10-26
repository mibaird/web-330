"use strict";
/*    JavaScript 7th Edition
      Chapter 8
      Project 08-01

      Project to create a timer object
      Author: Michelle Baird
      Date:   October 26, 2025

      Filename: project08-01.js
*/

/*--------------- Object Code --------------------*/

function timer(min,sec) {
  this.minutes = min; // property that stores current minutes
  this.seconds = sec; // property that stores current seconds
  this.timeId = null; // property that stores setInterval () ID
}

timer.prototype.runPause = function(timer, minBox, secBox) {
  if (timer.timeId) {
    // timer is running, pause it
    window.clearInterval(timer.timeId);
    timer.timeId = null;
  } else {
    // timer is paused, start timer
    timer.timeId =window.setInterval(function() {
      countdown(timer, minBox, secBox);
    }, 1000);
  }
};

function countdown(timer, minBox, secBox) {
  // if timer still has seconds left
  if (timer.seconds >0) {
    timer.seconds--;
  // if timer still has minutes left but no seconds (Ex: 2:00 becomes 1:59)
  } else if (timer.minutes >0) {
    timer.minutes--;
    timer.seconds = 59;
  // if timer has no mins or secs left (reached0:0)
  } else {
    window.clearInterval (timer.timeId); // timer stops
    timer.timeId =null;
  }

  // Updates display boxes
  minBox.value = timer.minutes;
  secBox.value = timer.seconds;
}



/*---------------Interface Code -----------------*/

/* Interface Objects */
let minBox = document.getElementById("minutesBox");
let secBox = document.getElementById("secondsBox");
let runPauseTimer = document.getElementById("runPauseButton");

// create instance of timer object
let myTimer = new timer(parseInt(minBox.value), parseInt(secBox.value));

minBox.onchange = function() {
  myTimer.minutes = parseInt(minBox.value);
};

secBox.onchange = function() {
  myTimer.seconds = parseInt(secBox.value);
};

//run of pause the timer when the button is clicked
runPauseTimer.onclick = function() {
  myTimer.runPause(myTimer, minBox, secBox);
};