let prompt = require("prompt-sync")(); // Importa a biblioteca para ler a entrada do usuário

// ! Loop

//* 1. Escreva um programa que calcule e mostre a tabuada(até 10x) de um número qualquer, digitado pelo usuário.

// Função que calcula a tabuada de um número
function calcularTabuada(numero) {
  // Loop que vai de 1 a 10 para multiplicar o número
  for (i = 1; i <= 10; i++) {
    // Exibe a multiplicação do número pelo valor do loop
    console.log(`${numero} * ${i} = ${numero * i}`);
  }
}

// Loop que garante a entrada correta do usuário
while (true) {
  // Solicita ao usuário que digite um número
  number = parseFloat(prompt("Digite um núero: "));

  // Verifica se o valor digitado é um número válido
  if (!isNaN(number)) {
    // Se for um número, chama a função para calcular a tabuada
    calcularTabuada(number);
    break; // Encerra o loop após uma entrada válida
  } else {
    // Se não for um número, informa ao usuário para digitar um número válido
    console.log("Digite um número válido");
  }
}
