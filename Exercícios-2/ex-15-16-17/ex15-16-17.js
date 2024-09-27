//* 15. Crie uma função que recebe 2 parâmetros e retorna a soma deles.

function somaParametros(num1, num2) {
  let somaTotal = num1 + num2; // Calcula a soma dos dois parâmetros

  return somaTotal; // Retorna o resultado da soma
}

// Testando a função:
console.log("O total desta soma é:", somaParametros(1, 1)); // Deve retornar 2
console.log("O total desta soma é:", somaParametros(10, 20)); // Deve retornar 30
console.log("O total desta soma é:", somaParametros(1578, 237)); // Deve retornar 1815
console.log("O total desta soma é:", somaParametros(544, 361)); // Deve retornar 905

console.clear(); // Limpa o terminal para facilitar a visualização dos próximos resultados.

//* 16. Crie uma função que recebe 2 parâmetros e retorna a soma deles, porém caso seja passado um parâmetro vazio ela retorna zero.

function soma(num3, num4) {
  // Verifica se algum dos parâmetros é vazio ou indefinido
  if (num3 === "" || num3 === undefined || num4 === "" || num4 === undefined) {
    return 0; // Retorna 0 se algum parâmetro estiver vazio
  } else {
    let total = num3 + num4; // Calcula a soma dos dois parâmetros

    return total; // Retorna o total da soma
  }
}

// Testando a função:
console.log("O total desta soma é:", soma(1)); // Deve retornar 0
console.log("O total desta soma é:", soma(250, 200)); // Deve retornar 450
console.log("O total desta soma é:", soma(undefined, 2)); // Deve retornar 0
console.log("O total desta soma é:", soma(1000, 10)); // Deve retornar 1010

console.clear(); // Limpa o terminal para facilitar a visualização dos próximos resultados.

//* 17. Exiba o 'resto' da próxima divisão: (5/2)

function restoDivisao(num5, num6) {
  let divisao = num5 % num6; // Calcula o resto da divisão

  return divisao; // Retorna o resto da divisão
}

console.log("O resto da divisão é:", restoDivisao(5, 2)); // Deve retornar 1
