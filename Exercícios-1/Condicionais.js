let prompt = require("prompt-sync")(); // Importa a biblioteca para ler a entrada do usuário

//! Condicionais

//* 1. Faça um programa que leia 2 números, some-os e exiba uma mensagem com o resultado apenas se o resultado for maior que 100.
let num1 = parseFloat(prompt("Digite o primeiro número: ")); // Solicita ao usuário o primeiro número e converte para float
let num2 = parseFloat(prompt("Digite o segundo número: ")); // Solicita ao usuário o segundo número e converte para float

let somaTotal = num1 + num2; // Calcula a soma dos dois números
// Verifica se a soma é maior que 100
if (somaTotal > 100) {
  console.log("Esse foi o resultado: ", somaTotal); // Exibe a soma se for maior que 100
} else {
  console.log("A soma foi menor que cem!"); // Exibe mensagem se a soma for menor ou igual a 100
}

//* 2. Para um jogo, precisamos saber se um personagem morreu ou não depois de sofrer um ataque.
// Faça uma função que receba 2 parâmetros, 'dano' e 'saude'. A função deve retornar '1' se o dano for matar o personagem
// (ou seja, deixar sua saúde menor ou igual a zero) e '0' caso contrário.

function vidaPersonagem(dano, saude) {
  let novaSaude = saude - dano; // Calcula a nova saúde do personagem após receber dano

  // Verifica se a nova saúde é menor ou igual a zero
  if (novaSaude <= 0) {
    return 1; // Retorna 1 se o personagem morreu
  } else {
    return 0; // Retorna 0 se o personagem ainda está vivo
  }
}

// Testes da função vidaPersonagem com diferentes valores de dano e saúde
console.log(vidaPersonagem(100, 10)); // Testa com dano maior que a saúde
console.log(vidaPersonagem(10, 100)); // Testa com dano menor que a saúde
console.log(vidaPersonagem(150, 100)); // Testa com dano maior que a saúde

//* 3. Precisamos limitar as posições em que um inimigo pode andar na tela.
//* A menor posição possível é 0 e a maior, 100: qualquer valor maior que 100 ou menor que 0 sairia fora da tela.
//* Precisamos de uma função LimitaPosicao que recebe uma POSICAO que pode ter qualquer valor positivo ou negativo,
//* verifica se ela é válida ou não e retorna sempre um valor corrigido entre 0 e 100.

function limitaPosicao(posicao) {
  // Verifica se a posição é menor que 0
  if (posicao < 0) {
    return 0; // Se for menor que 0, retorna 0
    // Verifica se a posição é maior que 100
  } else if (posicao > 100) {
    return 100; // Se for maior que 100, retorna 100
  } else {
    return posicao; // Se a posição está entre 0 e 100, retorna a posição original
  }
}

// Testes da função limitaPosicao com diferentes valores de posição
console.log(limitaPosicao(150)); // Testa com valor fora da faixa (maior que 100)
console.log(limitaPosicao(-20)); // Testa com valor fora da faixa (menor que 0)
console.log(limitaPosicao(30)); // Testa com valor dentro da faixa
