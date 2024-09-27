//* 32. Exiba aleatoriamente um número pelo alert()

// Função para gerar um número aleatório
function randomNumber(num) {
  // Gera um número aleatório entre 0 e 100 e arredonda para o número inteiro mais próximo
  num = (Math.random() * 100).toFixed(0);
  return num; // Retorna o número gerado
}

// Exibe o número aleatório em um alerta quando a página é carregada
alert(randomNumber());

//* 33. Agora faça um botão para clicar nele para informar se a pessoa acertou o número.

// Seleciona o botão na página pelo ID
let btn = document.getElementById("btn");

// Adiciona um evento de clique ao botão
btn.addEventListener("click", function () {
  // Gera um número inteiro aleatório quando o botão é clicado
  let numeroAleatorio = parseInt(randomNumber());

  // Solicita que o usuário insira um número via prompt e converte para número decimal inteiro
  let numeroUsuario = parseInt(prompt("Digite um número: "));

  // Verifica se o número gerado aleatoriamente é igual ao número fornecido pelo usuário
  if (numeroAleatorio === numeroUsuario) {
    // Se os números forem iguais, exibe uma mensagem de sucesso
    return alert("UAU, você acertou!");
  } else {
    // Se forem diferentes, exibe uma mensagem de erro
    return alert("Ih, não foi dessa vez!");
  }
});
