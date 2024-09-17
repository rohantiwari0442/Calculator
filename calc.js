let input = document.getElementById('input');

let buttons = document.querySelectorAll('button');

let buttonsArray = Array.from(buttons);

let string = '';
buttonsArray.forEach(btn => {
	btn.addEventListener('click', (event) => {
		if (event.target.innerText == '\u232B') {
			string = string.substring(0, string.length - 1);
			input.value = string;
		} else if (event.target.innerText == 'AC') {
			string = '';
			input.value = string;
		} else if (event.target.innerText == '=') {
			string = eval(string.replace('×', '*').replace('÷', '/'));
			input.value = string.toString().replace('*', '×').replace('/', '÷');
		} else {
			if (['+', '-', '×', '÷'].includes(string.slice(-1)) && ['+', '-', '×', '÷'].includes(event.target.innerText)) {
				string = event.target.innerHTML;
				return;
			}
			string += event.target.innerHTML;
			input.value = string;
		}
	});
});