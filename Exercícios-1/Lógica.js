let prompt = require("prompt-sync")(); // Importa a biblioteca para ler a entrada do usuário

// ! Lógica

// * 1. Faça um programa que leia um número e verifique se ele é par ou ímpar. Exiba uma mensagem indicando o resultado.
let num = parseFloat(prompt("Digite um número: ")); // Solicita ao usuário que digite um número e o converte para float

// Função para verificar se o número é par ou ímpar
function verificaNumero(num) {
  // Verifica se o número é divisível por 2
  if (num % 2 === 0) {
    console.log("Esse número é par"); // Exibe mensagem se o número for par
  } else {
    console.log("Esse número é ímpar"); // Exibe mensagem se o número for ímpar
  }
}
verificaNumero(num); // Chama a função para verificar o número

// * 2. Faça um programa que leia três números e exiba o maior entre eles.
let num1 = parseFloat(prompt("Digite um número: ")); // Lê o primeiro número
let num2 = parseFloat(prompt("Digite um número: ")); // Lê o segundo número
let num3 = parseFloat(prompt("Digite um número: ")); // Lê o terceiro número

// Função para verificar o maior número entre três números
function verificaNumero(num1, num2, num3) {
  let maiorNumero = num1; // Inicializa maiorNumero com o primeiro número
  // Compara o segundo número com o maiorNumero atual
  if (num2 > maiorNumero) {
    maiorNumero = num2; // Atualiza maiorNumero se num2 for maior
  }
  // Compara o terceiro número com o maiorNumero atual
  if (num3 > maiorNumero) maiorNumero = num3; // Atualiza maiorNumero se num3 for maior
  return maiorNumero; // Retorna o maior número encontrado
}

let maiorNum = verificaNumero(num1, num2, num3); // Chama a função e armazena o maior número

console.log("Esse foi o maior:", maiorNum); // Exibe o maior número encontrado

// * 3. Faça um programa que leia um número e determine se ele é positivo, negativo ou zero.
function tipoNum(num) {
  // Verifica se o número é maior que zero
  if (num > 0) {
    console.log("Esse número é positivo"); // Exibe mensagem se o número for positivo
  } else if (num < 0) {
    console.log("Esse número é negativo"); // Exibe mensagem se o número for negativo
  } else {
    console.log("Esse número é igual a zero"); // Exibe mensagem se o número for zero
  }
}

let numA = parseFloat(prompt("Digite um número: ")); // Solicita ao usuário que digite um número
tipoNum(numA); // Chama a função para determinar o tipo do número
