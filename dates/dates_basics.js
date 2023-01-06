let date = new Date();

let weekDay = date.getDay();
let day = date.getDate()
let hour = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();

console.log(`Dia ${day}, Hora ${hour}, Minutos ${minutes}, Segundos ${seconds}.`);

// Retorna o timestamp da data atual
let dataAgora = Date.now();
console.log(dataAgora);

// Define data e horário específico
date.setFullYear(2022);
date.setMonth(10);
date.setDate(date.getDate());

let fullYear = date;

console.log(fullYear);