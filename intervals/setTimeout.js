// SetTimeout serve para que uma função seja executada após um período de tempo e assim ela recebe dois parâmetros, sendo uma função e o tempo para

let iniciar = document.getElementById('iniciar').addEventListener('click', iniciarCont);
let parar = document.getElementById('parar').addEventListener('click', pararCont);
let resultado = document.getElementById('resultado')

let timer;

function mostrarContagem() {
	let d = new Date();
   let timeAtExec = d.toLocaleTimeString()
	resultado.innerHTML = timeAtExec;
}
//// Para autoexecutar a função, basta chamá-la
// setTimeout(mostrarContagem, 1000);

function iniciarCont() {
   resultado.innerHTML = "Vou mostrar em 3 segundos";
	timer = setTimeout(mostrarContagem, 3000);
}

function pararCont() {
	timer = null;
	resultado.innerHTML = timer;
	clearTimeout(timer);
}