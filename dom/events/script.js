const pegaParag = document.querySelector('.parag');
const pegaH1 = document.querySelector('h1')
const btn = document.querySelector('.btn');
const textBox = document.querySelectorAll('.text');

//// Esta maneira segundo o stackoverflow é mais assertiva e rápida do que o setAttribute, ambas funionam somente com o querySelector e adiciona o valor somente no primeiro item encontrado, não funciona com o querySelectorAll
// textBox.placeholder = "placeholder";
// textBox.setAttribute('placeholder', 'placeholder')

//// RemoveAttribute remove independente da forma de inserção se com prop ou setAttribute
//textBox.removeAttribute('placeholder')

// irá funcionar com qualquer tecla

//// Adiciona o atritubo em todas as tags input, só funciona caso tenha sido utilizado querySelectorAll, poie ele gera um array de itens.
textBox.forEach((input) => {
   input.setAttribute("placeholder", "placeholder");
   //input.firstNodeElemnt.removeAttribute('placeholder')
});

//// Faz o console log do texto "rodei" no primeiro evendo e depois vai contando os eventos, sem indicar a tecla pressionada
textBox.forEach(input => {
   input.onkeyup = () => console.log("rodei")
});

//// Faz o console log indicando cada uma das teclas pressionadas do teclado
// textBox.forEach(input => {
//    input.onkeyup = (event) => console.log(event.key)
// });

pegaH1.style.fontSize = "3rem"
pegaH1.style.fontFamily = "arial"

pegaParag.innerText += ' Um novo texto';
pegaParag.innerHTML += '<em><strong>, mais um texto!</strong></em>';

btn.innerText = 'Um novo texto';
btn.style.borderRadius = '5px';
