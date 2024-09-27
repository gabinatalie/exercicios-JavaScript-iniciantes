// * 8. Faça 2 campos no HTML chamados: 'Nome' e 'Sobrenome', e um botão 'Saudação'. Ao clicar no botão, exibir um alert: "Olá {NOME} {SOBRENOME}".

let nameInput = document.getElementById("name"); // Recebe o valor do campo de entrada do nome
let lastName = document.getElementById("last-name"); // Recebe o valor do campo de entrada do sobrenome
let btn = document.getElementById("btn-alert"); // Recebe o botão de saudação

// Adiciona um evento ao clicar no botão
btn.addEventListener("click", function () {
  // Verifica se os campos de nome e sobrenome não contêm números
  if (isNaN(nameInput.value) && isNaN(lastName.value)) {
    // Exibe um alert com a saudação utilizando os valores dos campos
    alert(`Olá ${nameInput.value} ${lastName.value}`);
  } else {
    // Se algum campo contiver números, exibe um alerta pedindo apenas letras
    alert("Digite apenas letras!");
  }
});
