let numToFact = 5

function fatorial() {
    let result = 1
    for (let i = numToFact; i > 1; i--) {
      result *= i
    }
    console.log(`Fatorial de ${numToFact}: ${result}`)
}
console.log(fatorial())