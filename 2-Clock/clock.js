$.backstretch('imgs/background.jpeg');

const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.min-hand');
const secondHand = document.querySelector('.second-hand');

const currentTime = document.querySelector('.current-time');

function setDate(){
  const current = new Date();

  currentTime.innerHTML = current;

  const hours = current.getHours();
  const minutes = current.getMinutes();
  const seconds = current.getSeconds();

  const hoursDegrees = ((hours/12) * 360) + 90;
  const minutesDegrees = ((minutes/60) * 360) + 90;
  const secondsDegrees = ((seconds/60) * 360) + 90;

  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  console.log(seconds);
}

setInterval(setDate, 1000);
