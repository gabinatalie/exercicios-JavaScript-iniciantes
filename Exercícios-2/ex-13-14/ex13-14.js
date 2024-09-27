//* 13. Crie uma div vazia cujo o id dela é 'resultado'. Insira via JavaScript assim que a tela carregar o seguinte texto: 'Esse texto foi inserido pelo JavaScript...'

// Função que é executada assim que a janela é carregada
window.onload = function () {
  let resultadoDiv = document.getElementById("resultado"); // Recebe a div com o id 'resultado'
  resultadoDiv.textContent = "Esse texto foi inserido pelo JavaScript"; // Insere o texto na div
};

//* 14. Agora crie um botão que ao ser clicado faça a mesma ação do exercício anterior.

let btn = document.getElementById("clicou"); // Recebe o botão que vai inserir o texto

// Adiciona um ouvinte de evento ao botão para inserir o texto ao ser clicado
btn.addEventListener("click", function () {
  let resultadoDois = document.getElementById("resultado-2"); // Recebe a div com o id 'resultado-2'
  resultadoDois.textContent =
    "Esse texto também foi inserido pelo JavaScript!! :)"; // Insere o texto na div
});
