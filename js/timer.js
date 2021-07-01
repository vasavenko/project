
import { formatError } from "./common.js";

export function startStop() {
	let min = document.querySelector('#min');
	let sec = document.querySelector("#sec");
	let start = document.querySelector("#start").addEventListener("click", startTimer);
	let stop = document.querySelector("#stop").addEventListener("click", stopTimer);
	let clear = document.querySelector("#clear").addEventListener("click", clearTimer);
	let audioEl = new Audio('notification.mp3')
	const timer__err = document.getElementById("timer__err");
	min.value = 0;
	sec.value = 0;

	let timerId = null
	function startTimer(){
		if(min.value ==0 && sec.value ==0 ){
			timer__err.innerHTML = formatError("Веедите требуемое время.")
		} else {
			timer__err.innerHTML = "";
			timerId = setInterval( function(){
				if(min.value ==0 && sec.value ==0 ){
					audioEl.play()
					clearInterval(timerId);
					timer__err.innerHTML = formatError("Время закончилось!")

				} else if (sec.value == 0){
					min.value--
					sec.value = 59;
				} else {
					sec.value--
				}
			}, 1000);
		}
	}
	function stopTimer(){
		clearInterval(timerId);
	}

	function clearTimer(){
		timer__err.innerHTML = "";
		clearInterval(timerId);
		min.value = 0;
		sec.value = 0;
	}

}
startStop()
