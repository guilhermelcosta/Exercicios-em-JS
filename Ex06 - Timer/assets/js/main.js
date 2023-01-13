const timerConfig = {
  hour: 00,
  minutes: 00,
  seconds: 00,
};
const timer = document.querySelector("#timer");
const iniciar = document.querySelector("#btn-iniciar");
const pausar = document.querySelector("#btn-pausar");
const recomecar = document.querySelector("#btn-recomecar");
var counter;

iniciar.addEventListener("click", (e) => {
  counter = setInterval(addSeconds, 1000);
  iniciar.setAttribute("disabled", "");
});

pausar.addEventListener("click", (e) => {
  clearInterval(counter);
  timer.querySelector("p").style.color = "red";
  iniciar.removeAttribute("disabled");
});

recomecar.addEventListener("click", (e) => {
  timerConfig.hour = 0;
  timerConfig.minutes = 0;
  timerConfig.seconds = 0;
  clearInterval(counter);
  timer.innerHTML = `<p>${addZero(timerConfig.hour)} : ${addZero(timerConfig.minutes)} : ${addZero(
    timerConfig.seconds
  )}</p>`;

  if (iniciar.hasAttribute("disabled")) iniciar.removeAttribute("disabled");
});

function addSeconds() {
  if (timerConfig.minutes == 59 && timerConfig.seconds == 59) {
    timerConfig.hour++;
    timerConfig.minutes = 0;
    timerConfig.seconds = 0;
  } else if (timerConfig.seconds == 59) {
    timerConfig.minutes++;
    timerConfig.seconds = 0;
  }

  timerConfig.seconds++;
  timer.innerHTML = `<p>${addZero(timerConfig.hour)} : ${addZero(timerConfig.minutes)} : ${addZero(
    timerConfig.seconds
  )}</p>`;
}

function addZero(number) {
  if (number < 10) return `0${number}`;
  return number;
}
