// import "../public/css/style.css"
import "./style.sass";
import { render } from './card'
import cards from './cards'

const galery_body = document.querySelector(".galery__body");
cards.forEach(card => {galery_body.append(render(card));
	
});
