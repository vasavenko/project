const appEls = document.querySelectorAll('.app');
const buttonEls = document.querySelectorAll('.switch');
buttonEls.forEach(function (buttonEl) {
	buttonEl.addEventListener('click', changeActiveClass)
});

function changeActiveClass(event) {
	appEls.forEach(appEl => {
		if (event.target.dataset.type == appEl.dataset.type) {
			appEl.classList.add("active")
		} else appEl.classList.remove("active")
	});
}
