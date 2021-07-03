import { formatError } from "./common.js";

const startButton = document.querySelector("#start").addEventListener("click", startTimer);
const stopButton = document.querySelector("#stop").addEventListener("click", stopTimer);
const clearButton = document.querySelector("#clear").addEventListener("click", clearTimer);
const audio = new Audio('notification.mp3')
minutesEl.value = 0;
secondsEl.value = 0;
let timerId = null;

function startTimer() {
	if (minutesEl.value == 0 && secondsEl.value == 0) {
		timer__err.innerHTML = formatError("Веедите требуемое время.")
	} else if (timerId == null) {
		timer__err.innerHTML = "";
		timerId = setInterval(function () {
			if (minutesEl.value == 0 && secondsEl.value == 0) {
				audio.play()
				clearInterval(timerId);
				timerId = null;
				minutesEl.value = "";
				secondsEl.value = "";

				timer__err.innerHTML = formatError("Время закончилось!")
			} else if (secondsEl.value == 0) {
				minutesEl.value--
				secondsEl.value = 59;
			} else {
				secondsEl.value--
			}
		}, 1000);
	}
}

function stopTimer() {
	clearInterval(timerId);
	timerId = null;
}

function clearTimer() {
	timer__err.innerHTML = "";
	clearInterval(timerId);
	minutesEl.value = 0;
	secondsEl.value = 0;
	timerId = null;
}
