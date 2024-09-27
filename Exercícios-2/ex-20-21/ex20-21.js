//* 20. Crie uma função que calcula 5% de desconto retornando o valor com desconto.

function calcularDesconto(valor) {
  // Calcula o desconto de 5%
  let desconto = (valor * 5) / 100;

  // Subtrai o desconto do valor original
  let valorComDesconto = valor - desconto;

  // Retorna o valor com desconto
  return valorComDesconto;
}

// Testando a função:
console.log("O valor com desconto é: R$", calcularDesconto(1000)); // Deve retornar 950
console.log("O valor com desconto é: R$", calcularDesconto(10)); // Deve retornar 9.50
console.log("O valor com desconto é: R$", calcularDesconto(200)); // Deve retornar 190
console.log("O valor com desconto é: R$", calcularDesconto(50)); // Deve retornar 47.50

console.clear(); // Limpa o terminal para facilitar a visualização dos próximos resultados.

//* 21. Crie uma função que recebe o ano de nascimento da pessoa informando se ela é maior de idade ou menor.

function verificaIdade(ano) {
  let anoAtual = 2024; // Define o ano atual
  let idade = anoAtual - ano; // Calcula a idade

  // Verifica se a pessoa é menor ou maior de idade
  if (idade < 18) {
    return "menor de idade"; // Retorna "menor de idade" se a idade for menor que 18
  } else {
    return "maior de idade"; // Retorna "maior de idade" se a idade for igual ou maior que 18
  }
}

// Testando a função:
console.log("O usuário é:", verificaIdade(1992)); // Deve retornar "maior de idade"
console.log("O usuário é:", verificaIdade(2018)); // Deve retornar "menor de idade"
console.log("O usuário é:", verificaIdade(2000)); // Deve retornar "maior de idade"
console.log("O usuário é:", verificaIdade(2014)); // Deve retornar "menor de idade"
