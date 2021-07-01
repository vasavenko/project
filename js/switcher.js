export function switcher(){
	let timer = document.querySelector(".timer");
	let datecalc = document.querySelector(".datecalc");
	let buttonsEl = document.querySelectorAll('.switch');
		buttonsEl.forEach(function(buttonEl){
			buttonEl.addEventListener('click', changeActiveClass)
			timer.classList.add("active");
});

function changeActiveClass(event) {
		if(event.target.dataset.type == 'timer'){
			datecalc.classList.remove("active");
			timer.classList.add("active");
		} else {
			timer.classList.remove("active");
			datecalc.classList.add("active");
		}
}

}
switcher();
