//* 48. Faça um programa que leia uma frase do usuário e conte quantas vogais (a,e,i,o,u) existem na frase. Exiba o total de vogais encontradas.

function contarVogais(frase) {
  // Definindo as vogais que serão contadas (tanto maiúsculas quanto minúsculas)
  const vogais = "aeiouAEIOU";
  let contador = 0; // Inicializando o contador de vogais

  // Iterando pela frase para verificar cada caractere
  for (let i = 0; i < frase.length; i++) {
    // Verificando se o caractere atual é uma vogal
    if (vogais.includes(frase[i])) {
      contador++; // Incrementa o contador se for uma vogal
    }
  }
  // Retornando o total de vogais encontradas na frase
  return contador;
}

// Coletando a entrada do usuário através de um prompt
const fraseUsuario = prompt("Digite uma frase:");
const totalVogais = contarVogais(fraseUsuario); // Chamando a função para contar as vogais

// Exibindo o resultado final com o total de vogais encontradas
alert(`A frase contém ${totalVogais} vogais.`);

//* 49. Crie uma função que recebe um array de números e retorna a soma de todos os números pares contidos no array. Caso não existam números pares, a função deve retornar 0.

// Definir um array de números para trabalhar
let numeros = [
  1, 5, 6, 4, 3, 2, 6, 7, 8, 9, 19, 24, 22, 35, 67, 89, 75, 44, 32, 56, 70, 25,
];

// Função para calcular a soma dos números pares no array
function somaPares(array) {
  let totalPares = 0; // Iniciando a variável que armazena o total da soma
  // Iterando através do array de números
  for (let i = 0; i < array.length; i++) {
    // Verifica se cada item do array é par
    if (array[i] % 2 === 0) {
      totalPares += array[i]; // Se sim, soma esse valor ao total
    }
  }
  // Retorna o total de pares encontrados no array
  return totalPares;
}

// Chamando a função para somar os pares e armazenando o resultado
const resultado = somaPares(numeros);
// Exibindo o resultado da soma dos números pares
console.log(`A soma de todos os pares é: ${resultado}`);

//* 50. Faça um programa que leia uma string do usuário e exiba a mesma string, mas invertida. Por exemplo, o usuário digita "Olá" e o programa irá exibir "álO"

// Função para inverter uma string recebida como parâmetro
function inverterString(str) {
  let stringInvertida = ""; // Inicializando a variável que armazenará a string invertida

  // Iterando de trás para frente na string original
  for (let i = str.length - 1; i >= 0; i--) {
    stringInvertida += str[i]; // Adiciona cada caractere ao resultado invertido
  }
  // Retorna a string invertida
  return stringInvertida;
}

// Chamadas da função inverterString com diferentes entradas
let stringResultado = inverterString("Olá, mundo!"); // Invertendo a string 'Olá, mundo!'
console.log(`A string invertida é: ${stringResultado}`); // Exibindo o resultado

// Invertendo outra string e exibindo o resultado
stringResultado = inverterString("É muito bom estudar lógica de programação!"); // Invertendo a string
console.log(`A string invertida é: ${stringResultado}`); // Exibindo o resultado
