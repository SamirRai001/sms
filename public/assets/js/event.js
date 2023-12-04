const deg = 6;
const hourHand = document.querySelector(".hour");
const minHand = document.querySelector(".min");
const secHand = document.querySelector(".sec");

const setAnalogClock = () => {
  let currentTime = new Date();
  let hours = currentTime.getHours() % 12;
  let minutes = currentTime.getMinutes();
  let seconds = currentTime.getSeconds();

  let hourRotation = hours * 30 + minutes / 2; // 30 degrees per hour, 0.5 degrees per minute
  let minRotation = minutes * deg;
  let secRotation = seconds * deg;

  hourHand.style.transform = `rotateZ(${hourRotation}deg)`;
  minHand.style.transform = `rotateZ(${minRotation}deg)`;
  secHand.style.transform = `rotateZ(${secRotation}deg)`;
};

// Update analog clock every 1000 ms
setInterval(setAnalogClock, 1000);

const showDigitalClock = () => {
  let currentTime = new Date();
  let hours = currentTime.getHours();
  let minutes = currentTime.getMinutes();
  let seconds = currentTime.getSeconds();
  let session = hours >= 12 ? "PM" : "AM";

  hours = hours % 12 || 12;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  let digitalTime = `${hours}:${minutes}:${seconds} ${session}`;
  document.getElementById('digital-clock').innerHTML = digitalTime;

  // Update digital clock every second
  setTimeout(showDigitalClock, 1000);
};

// Show digital clock initially
showDigitalClock();

const switchTheme = (evt) => {
  const switchBtn = evt.target;
  const currentTheme = document.documentElement.getAttribute("data-theme");

  if (currentTheme === "light") {
    switchBtn.textContent = "dark";
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    switchBtn.textContent = "light";
    document.documentElement.setAttribute("data-theme", "light");
  }
};

const switchModeBtn = document.querySelector(".switch-btn");
switchModeBtn.addEventListener("click", switchTheme, false);