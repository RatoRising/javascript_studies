// Higher Order Function
const numbers = [2, 4, 8, 16]
const square = n => n * n
const squareRes = numbers.map(square)
console.log(squareRes)

// Higher Order Function com currying, quando apenas uma parte da função recebe novos parâmetros, no exemplo abaixo, o setTimeout está fixo.
const pause = (wait) => (fn) => setTimeout(fn, wait);
pause(600)(() => console.log('waiting 600ms'));
const wait200 = pause(200)
const wait1000 = pause(1000)
wait200(() => console.log('waiting 200ms'))
wait1000(() => console.log('waiting 1s'))