	import './style.css';
	import picS from './c2.png';

	function component(){
		var element = document.createElement('div');
		element.innerHTML="webpack4";
		element.classList.add('hello');

		var pic = new Image();
		pic.src = picS;
		element.appendChild(pic);
		return element;
	}
document.body.appendChild(component());