let iniciar = document.getElementById('iniciar').addEventListener('click', iniciarCont)
let parar = document.getElementById('parar').addEventListener('click', pararCont)
let reiniciar = document.getElementById('reiniciar').addEventListener('click', reiniciarCont)

let timer;

function mostrarContagem() {
   let d = new Date();
   let hora = d.toLocaleTimeString()
   document.getElementById('resultado').innerHTML = hora;
}

function iniciarCont() {
   timer = setInterval(mostrarContagem, 1000);
}

function pararCont() {
   clearInterval(timer);
}

function reiniciarCont() {
   iniciarCont();
}

