//* 12. Crie dois botões no HTML chamados: 'Verde', 'Vermelho'. Ao clicar neles, o style="background-color: {COR-SELECIONADA}" vai ser alterado dinamicamente.

let btnGreen = document.getElementById("green"); // Recebe o botão para a cor verde
let btnRed = document.getElementById("red"); // Recebe o botão para a cor vermelha

// Função que altera a cor de fundo do documento
function changeBackground(cor) {
  document.body.style.backgroundColor = cor; // Altera a cor de fundo para a cor passada como argumento
}

// Adiciona um ouvinte de evento ao botão verde para mudar a cor de fundo ao ser clicado
btnGreen.addEventListener("click", function () {
  changeBackground("green"); // Chama a função changeBackground com a cor verde
});

// Adiciona um ouvinte de evento ao botão vermelho para mudar a cor de fundo ao ser clicado
btnRed.addEventListener("click", function () {
  changeBackground("red"); // Chama a função changeBackground com a cor vermelha
});
