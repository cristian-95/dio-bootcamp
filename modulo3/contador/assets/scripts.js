let count = 0;

const CURRENT_NUMBER = document.getElementById('currentNumber');

const decrementa  = document.getElementById('subtrair');
const incrementa  = document.getElementById('adicionar');

incrementa.addEventListener("click", increment, false)
decrementa.addEventListener("click", decrement, false)

function increment() {
	count++;
	CURRENT_NUMBER.innerHTML = count;
	if (CURRENT_NUMBER.innerHTML >= 10 ){
		incrementa.disabled = true;
	}
	if (CURRENT_NUMBER.innerHTML >= 0 ){
		CURRENT_NUMBER.style.color = 'black';
	}
}

function decrement() {
	count--;
	CURRENT_NUMBER.innerHTML = count;
	if (CURRENT_NUMBER.innerHTML < 0 ){
		CURRENT_NUMBER.style.color = 'red';
	}
	if (CURRENT_NUMBER.innerHTML <= -10 ){
		decrementa.disabled = true;
	}
}