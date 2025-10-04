// creating variables to track the time
let watchSeconds = 0;
let watchMinutes = 0;
let watchHours = 0;

// to set the interval
let timer;
let timeRunning = false;

// get the element from Html document through the id
let timeDisplay = document.getElementById("stopwatch_display");

// create function to update the stop watch display
function watchDisplay() {
  let h;
  let m;
  let s;

  // here i checked if the hours is less than 10 and if true, add 0 in front of the result, else print the result withouth adding 0.
  if (watchHours < 10) {
    h = "0" + watchHours;
  } else {
    h = watchHours;
  }

  // here i checked if the minutes is less than 10 and if true, add 0 in front of the result, else print the result withouth adding 0.
  if (watchMinutes < 10) {
    m = "0" + watchMinutes;
  } else {
    m = watchMinutes;
  }

  // here i checked if the seconds is less than 10 and if true, add 0 in front of the result, else print the result withouth adding 0.
  if (watchSeconds < 10) {
    s = "0" + watchSeconds;
  } else {
    s = watchSeconds;
  }

  //display the result of the function with new assigned html
  timeDisplay.innerHTML = `${h} : ${m} : ${s}`;
}

//start the stopwatch
function startTime() {
  // check if the stopwatcg is not running
  if (timeRunning === false) {
    //set it to run when startTime is called by clicking on the button after eventListner has been assigned to the start button
    timeRunning = true;

    // set the watchTime to run every 1 second
    watchTime = setInterval(() => {
      //increase the watchSeconds by 1
      watchSeconds++;

      //if the watchseconds reach 60, reset the watchSecond and increase the watchMinutes by 1.
      if (watchSeconds === 60) {
        watchSeconds = 0;
        watchMinutes++;
      }

      // //if the watchMinutes reach 60, reset the watchminutes and increase the watchHours by 1.
      if (watchMinutes === 60) {
        watchMinutes = 0;
        watchHours++;
      }

      //calling the function watchDisplay().
      watchDisplay();
    }, 1000); // run this block of function every 1 second.
  }
}

//stop the stopwatch
function stopTime() {
  clearInterval(watchTime);
  timeRunning = false;
}

//reset the stopwatch
function resetTime() {
  clearInterval(watchTime);
  timeRunning = false;
  watchSeconds = 0;
  watchMinutes = 0;
  watchHours = 0;

  //calling the function watchDisplay().
  watchDisplay();
}

//adding event listners to the button by getting the button id from thr HTML document and add javascript event listners to the buttons.
document.getElementById("start_time").addEventListener("click", startTime);
document.getElementById("stop_time").addEventListener("click", stopTime);
document.getElementById("reset_time").addEventListener("click", resetTime);

//calling the function watchDisplay().
watchDisplay();
