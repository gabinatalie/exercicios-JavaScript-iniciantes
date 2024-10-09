//* 46.  Crie uma contagem regressiva de 10 até 0. 

let count = 10; // valor iniciar
const countDisplay = document.getElementById("count");

const countdown = setInterval(() => {
  countDisplay.textContent = count; //exibe o número atual
  count--; //decrementa o contador

  if (count < 0) {
    clearInterval(countdown); //para o contador chegar em 0
  }
}, 1000); //intervalo de 1 segundo
