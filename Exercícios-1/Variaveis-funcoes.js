let prompt = require("prompt-sync")(); // Importa a biblioteca para leitura de entrada do usuário

// ! Variáveis e Funções

//* 1. Faça um programa que exiba 3 números na tela.
let num1 = 1; // Primeiro número a ser exibido
let num2 = 44; // Segundo número a ser exibido
let num3 = 56; // Terceiro número a ser exibido

// Exibe os três números na tela
console.log("Aqui estão os números:", num1, num2, num3);

//* 2. Faça um programa que leia 3 números e exiba-os na tela.

// Solicita ao usuário que digite três números e os armazena em variáveis
let num4 = parseFloat(prompt("Digite o primeiro número: ")); // Primeiro número digitado pelo usuário
let num5 = parseFloat(prompt("Digite o segundo número: ")); // Segundo número digitado pelo usuário
let num6 = parseFloat(prompt("Digite o terceiro número: ")); // Terceiro número digitado pelo usuário

// Exibe os números digitados pelo usuário
console.log("Aqui estão seus números:", num4, num5, num6);

// Calcula a soma dos três números digitados pelo usuário
let somaTotal = num4 + num5 + num6;

// Exibe a soma dos números na tela
console.log("A soma dos números escolhidos é:", somaTotal);

//* 3. Faça um programa que leia do usuário uma temperatura em Fahrenheit, converta-a para graus Celsius e escreva o novo valor na tela.
//* A fórmula de conversão de Fahrenheit (F) para Celsius é C = ( ( F - 32 ) * 5 ) / 9.
//* Exemplo: 100 Fahrenheit = 37,77 Celsius.

// Solicita ao usuário que digite uma temperatura em Fahrenheit
let tempF = parseFloat(prompt("Digite a temperatura em Fahrenheit: "));

// Converte a temperatura de Fahrenheit para Celsius usando a fórmula
let tempCelcius = ((tempF - 32) * 5) / 9;

// Exibe a temperatura convertida para Celsius na tela, formatando para duas casas decimais
console.log("Essa temperatura em Celcius é: ", tempCelcius.toFixed(2));
