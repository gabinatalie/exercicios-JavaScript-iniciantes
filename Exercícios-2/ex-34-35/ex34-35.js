//* 34. Exiba a data atual pelo JavaScript no seguinte formato: dia/mês/Ano
let date = new Date(); // Cria um objeto Date com a data atual
const day = date.getDate(); // Obtém o dia atual
const month = date.getMonth() + 1; // Obtém o mês atual (adiciona 1 pois getMonth() retorna de 0 a 11)
const year = date.getFullYear(); // Obtém o ano atual

//Imprime a data atual
console.log(`Data atual é  ${day}/${month}/${year}`);

//* 35. Exiba o próximo mês (dinamicamente)

// Cria um objeto Date com a data atual
let currentDate = new Date();

// Obtém o mês atual (de 0 a 11) e o ano atual
let currentMonth = currentDate.getMonth();
let currentYear = currentDate.getFullYear();

// Calcula o próximo mês
let nextMonth = currentMonth + 1;

// Verifica se o próximo mês é janeiro (0) e ajusta o ano se necessário
if (nextMonth === 12) {
  nextMonth = 0; // Volta para janeiro
  currentYear++; // Incrementa o ano
}

// Um array para os meses do ano, para facilitar a visualização
const months = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

// Exibe o próximo mês e o ano
console.log(`Próximo mês: ${months[nextMonth]} / ${currentYear}`);
