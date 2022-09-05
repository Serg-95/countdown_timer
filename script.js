
const daysEl = document.getElementById("days")
const hoursEl = document.getElementById("hours")
const minutesEl = document.getElementById("minutes")
const secondsEl = document.getElementById("seconds")

var int_id;

const formatTime = time => time < 10 ? `0${time}` : time

function got_date(elem) {

  // the parsed value is always formatted yyyy-mm-dd

  var str_date = elem.value + 'T00:00'
  var newLaunch = str_date;
  
  const newLaunchDate = new Date(newLaunch)


  function countdown() {
    const currentDate = new Date()
    const totalSeconds = (newLaunchDate - currentDate) / 1000
    
    if (totalSeconds < 0) {
      console.log("target date has passed");
      return;
    }

    const days = Math.floor(totalSeconds / 3600 / 24)
    const hours = Math.floor(totalSeconds / 3600) % 24
    const minutes = Math.floor(totalSeconds / 60) % 60
    const seconds = Math.floor(totalSeconds) % 60

    daysEl.innerHTML = days
    hoursEl.innerHTML = formatTime(hours)
    minutesEl.innerHTML = formatTime(minutes)
    secondsEl.innerHTML = formatTime(seconds)

  }

  //initial call
  countdown()

  clearInterval(int_id);
  int_id = setInterval(countdown, 1000)

}