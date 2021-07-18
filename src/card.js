export function render(card) {
	const itemEl = document.createElement("div");
	itemEl.classList.add('card');

	if(card.type === 'img'){
		const imgEl = document.createElement("img");
		imgEl.classList.add('card__img');
		imgEl.src = card.sourse;
		itemEl.append(imgEl);
	} else if(card.type === 'audio'){
		const audioEl = document.createElement("audio");
		audioEl.classList.add('card__audio');
		audioEl.src = card.sourse;
		audioEl.controls = true;
		itemEl.append(audioEl);
	} else if(card.type === 'video'){
		const videoEl = document.createElement("video");
		videoEl.classList.add('card__video');
		videoEl.src = card.sourse;
		videoEl.controls = true;
		itemEl.append(videoEl);
	}
	const titleEl = document.createElement("span");
	titleEl.classList.add('card__title');
	titleEl.textContent = card.title;

	// itemEl.append(imgEl);
	itemEl.append(titleEl);

	return itemEl;
} 