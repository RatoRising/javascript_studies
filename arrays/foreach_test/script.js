const ondeClica = document.querySelector('.ondeclica').addEventListener('click', () => alert('Clicked H1'));

// utilizando somente a classe divs ele irá selecionar qualquer item no DOM que tenha essa classe
// especificando que são as divs filhas no container ele irá selecionar somente os filhos do container
const minhasDivs = document.querySelectorAll('.container>.divs').forEach((item) => {
	item.addEventListener('click', () => {
		alert(`Clicked ${item.innerHTML}`);
	});
});
