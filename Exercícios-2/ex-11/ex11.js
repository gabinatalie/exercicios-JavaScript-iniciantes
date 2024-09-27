// *Exercício 11:
//* 2 x - Campo/Input do tipo text. (id=soma1, id=soma2)
//* 1 x - Botão (id=btn-soma)
//* 1 x - Campo (id=resultado-soma)
//* Caso esteja preenchido um valor numérico nos dois campos (id=soma1, id=soma2),
//* O resultado da soma deverá aparecer no campo (id=resultado-soma) ao clicar no botão (id=btn-soma).

let num1 = document.getElementById("soma1"); // Recebe o primeiro campo de entrada (soma1)
let num2 = document.getElementById("soma2"); // Recebe o segundo campo de entrada (soma2)
let btnSoma = document.getElementById("btn-soma"); // Recebe o botão para calcular a soma
let resultOutput = document.getElementById("resultado-soma"); // Recebe o campo para exibir o resultado da soma

// Adiciona um ouvinte de evento ao botão para calcular a soma ao ser clicado
btnSoma.addEventListener("click", function () {
  // Calcula a soma dos valores dos campos de entrada, convertendo-os para números
  let resultadoSoma = parseFloat(num1.value) + parseFloat(num2.value);

  // Verifica se o resultado da soma é um número válido
  if (!isNaN(resultadoSoma)) {
    resultOutput.value = resultadoSoma; // Exibe o resultado da soma no campo de saída
  } else {
    alert("Digite apenas números"); // Alerta o usuário para inserir apenas números
  }
});
