// * 5. Exiba a quantidade de letras que possuem o texto inserido ao clicar no botão

// Recebe o campo de entrada onde o usuário insere a palavra
let wordInput = document.getElementById("word");
// Recebe o botão que irá acionar a contagem de letras
let btn = document.getElementById("btn");

// Adiciona um evento ao clicar no botão
btn.addEventListener("click", function () {
  // Calcula a quantidade de letras na palavra inserida
  let qtdLetras = wordInput.value.length;

  // Verifica se o valor inserido não é um número
  if (isNaN(wordInput.value)) {
    // Se não for um número
    // Exibe um alerta com a palavra e a quantidade de letras
    alert(`Sua palavra: ${wordInput.value}, possui: ${qtdLetras} letras`);
  } else {
    // Exibe um alerta se o valor contiver números
    alert("Digite apenas letras!");
  }
});
