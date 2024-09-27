//* 4.No HTML Crie:
//* 1 - Campo/Input do tipo text para preencher o nome completo.
//* 1 - Botão com o texto: 'Exibir Nome' e ao clicar neste botão é exibido um alert com o valor do campo nome completo, ex: ' O Nome Completo é: "xxxx". '

// Recebe os elementos do HTML pelo id
let nomeCompleto = document.getElementById("name"); // Obtém o campo de entrada para o nome completo
let btn = document.getElementById("btn-exibir"); // Obtém o botão para exibir o nome

// Adiciona um evento ao clicar no botão
btn.addEventListener("click", function () {
  // Verifica se o nome digitado não contém números
  if (isNaN(nomeCompleto.value)) {
    // Se o valor não é um número
    alert(`O nome completo é: ${nomeCompleto.value}`); // Exibe o nome completo em um alerta
  } else {
    alert("Digite apenas letras!"); // Exibe um alerta se o valor contiver números
  }
});
