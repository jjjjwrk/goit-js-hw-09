const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const body = document.querySelector('body');
let interval;

startBtn.addEventListener('click', onClickStart);
stopBtn.addEventListener('click', onClickStop);

function onClickStart() {
    interval = setInterval(() => {
        body.style.backgroundColor = getRandomHexColor();
    }, 1000);

    startBtn.disabled = true;
    stopBtn.disabled = false;
};

function onClickStop() {
    clearInterval(interval); 
    startBtn.disabled = false;
}




function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }