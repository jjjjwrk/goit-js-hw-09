import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const userInput = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('[data-start]');
const inputDays = document.querySelector('[data-days]');
const inputHours = document.querySelector('[data-hours]');
const inputMinutes = document.querySelector('[data-minutes]');
const inputSeconds = document.querySelector('[data-seconds]');

startBtn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
        console.log(selectedDates[0]);
        checkDate(selectedDates);
    },
};

function checkDate(selectedDates) {
    const selectDate = selectedDates[0];
    const currentDate = options.defaultDate;
    if (selectDate <= currentDate) {
            alert('Please choose a date in the future');
            return;
    };
    startBtn.disabled = false;
    
    startBtn.addEventListener('click', onClickStart);
    function onClickStart() {
        startBtn.disabled = true;
        userInput.disabled = true;
        timerOn(selectDate);
    };
};

flatpickr(userInput, options);

function timerOn(selectDate) {
    const timerID = setInterval(() => {
        let currentDate = new Date();
        let resData = selectDate - currentDate;
        if (resData <= 0) {
            clearInterval(timerID);
            userInput.disabled = false;
            alert('Time is over');
            return;
        };
        updateTimer(convertMs(resData));
    }, 1000);
};

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function updateTimer(convertData) {
    const { days, hours, minutes, seconds } = convertData;
    inputDays.textContent = days;
    inputHours.textContent = hours;
    inputMinutes.textContent = minutes;
    inputSeconds.textContent = seconds;
};
