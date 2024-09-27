//* 18. Crie uma função que receba um número como parâmetro e retorne se ele é ímpar ou par.

function verificaNum(num) {
  // Verifica se o número é divisível por 2
  if (num % 2 === 0) {
    return "par"; // Retorna "par" se o número for par
  } else {
    return "ímpar"; // Retorna "ímpar" se o número for ímpar
  }
}

// Testando a função:
console.log("Este número é:", verificaNum(32)); // Deve retornar "par"
console.log("Este número é:", verificaNum(77)); // Deve retornar "ímpar"
console.log("Este número é:", verificaNum(90)); // Deve retornar "par"
console.log("Este número é:", verificaNum(45)); // Deve retornar "ímpar"

console.clear(); // Limpa o terminal para facilitar a visualização dos próximos resultados.

//* 19. Crie uma função que recebe 2 parâmetros e retorna a multiplicação deles.

function multiplicacao(num1, num2) {
  let total = num1 * num2; // Calcula a multiplicação dos dois parâmetros

  return total; // Retorna o total da multiplicação
}

// Testando a função:
console.log("O total é:", multiplicacao(10, 10)); // Deve retornar 100
console.log("O total é:", multiplicacao(2, 10)); // Deve retornar 20
console.log("O total é:", multiplicacao(150, 20)); // Deve retornar 3000
console.log("O total é:", multiplicacao(99, 11)); // Deve retornar 1089
