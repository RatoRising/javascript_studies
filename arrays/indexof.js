let nomesDosPresentes = ["João", "Ana", "Mário", "Robson"];
let nomeDoAluno = "Ana";
function estavaPresenteNaAula(nomeDoAluno, nomesDosPresentes) {
    if (nomesDosPresentes.indexOf(nomeDoAluno) != -1) {
        return `${nomeDoAluno} estava presente na aula.`;
    } else {
        return `${nomeDoAluno} não estava presente na aula.`;;
    }
}
console.log(estavaPresenteNaAula(nomeDoAluno, nomesDosPresentes))