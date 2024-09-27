//* 28. Dentro da div com o id 'resultado', escreva os números de 0 a 10 (fiz utilizando do while)

// Seleciona o elemento com id 'resultado' onde os números de 0 a 10 serão exibidos
let numeros = document.getElementById("resultado");

// Inicializa a variável 'i' com o valor 0, que será usada como contador
let i = 0;

do {
  // Adiciona o valor atual de 'i' ao conteúdo da div 'resultado', seguido de um espaço
  numeros.innerHTML += i + " ";

  // Incrementa o valor de 'i' em 1
  i++;

  // Repete o loop enquanto 'i' for menor ou igual a 10
} while (i <= 10);

//* 29. Dentro da div com o id 'resultado2', escreva os números pares até 20... (fiz utilizando while)

// Seleciona o elemento com id 'resultado2' onde os números pares serão exibidos
let numeros2 = document.getElementById("resultado2");

// Inicializa a variável 'x' com o valor 2, que será usada como contador para os números pares
let x = 2;

while (x <= 20) {
  // Adiciona o valor atual de 'x' (número par) ao conteúdo da div 'resultado2', seguido de um espaço
  numeros2.innerHTML += x + " ";

  // Incrementa 'x' em 2 para garantir que apenas números pares sejam exibidos
  x += 2;
}

//* 30. Exiba a tabuada do 1 até o 10

// Seleciona o elemento com id 'tabuada' onde a tabuada será exibida
let resultadoTabuada = document.getElementById("tabuada");

// Função para calcular a tabuada de um número específico
function calcularTabuada(numero) {
  // Inicializa uma variável 'resultado' para armazenar o resultado da tabuada
  let resultado = " ";

  // Loop de 1 a 10 para calcular a tabuada do número fornecido
  for (i = 1; i <= 10; i++) {
    // Concatena o resultado da multiplicação na string 'resultado', incluindo quebras de linha <br>
    resultado += `${numero} * ${i} = ${numero * i}<br>`;
  }

  // Retorna o resultado completo da tabuada
  return resultado;
}

// Loop de 1 a 10 para exibir a tabuada de cada número
for (let num = 1; num <= 10; num++) {
  // Adiciona o título da tabuada para o número atual
  resultadoTabuada.innerHTML += `<strong>Tabuada do ${num}:</strong><br>`;

  // Adiciona o resultado da tabuada do número atual chamando a função calcularTabuada
  resultadoTabuada.innerHTML += calcularTabuada(num);

  // Adiciona uma quebra de linha entre cada tabuada
  resultadoTabuada.innerHTML += "<br>";
}
