//* 9. Crie um campo texto para preencher um CPF <input maxlength="11" id="cpf" />,
// e exiba ao lado com pontuação conforme preencher.

let cpfInput = document.getElementById("cpf-unformatted"); // Recebe o campo de entrada de CPF sem formatação
let cpfOutput = document.getElementById("cpf-formatted"); // Recebe o campo para exibir o CPF formatado

// Função para formatar o CPF com pontos e hífens
function formatarCPF(cpf) {
  // Remove os caracteres não numéricos do CPF
  cpf = cpf.replace(/\D/g, "");

  // Adiciona a formatação com pontos e hífen
  return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
}

// Adiciona um ouvinte de evento para formatar o CPF quando o usuário digita
cpfInput.addEventListener("input", () => {
  const cpf = cpfInput.value; // Captura o valor digitado no campo de CPF
  cpfOutput.textContent = formatarCPF(cpf); // Exibe o CPF formatado no campo de saída
});

//* 10. Preencha um CPF com pontuação <input maxlength="14" id="cpfPoint" />
// e no campo ao lado exiba sem pontuação.

let cpfInputPoint = document.getElementById("cpf-formatted-2"); // Recebe o campo de entrada de CPF formatado
let cpfOutputPoint = document.getElementById("cpf-unformatted-2"); // Recebe o campo para exibir o CPF sem formatação

// Função que retorna o CPF em formato de string sem pontuação
function unformateCPF(cpf) {
  return cpf.replace(/\D/g, ""); // Remove os caracteres não numéricos
}

// Adiciona um ouvinte de evento para exibir o CPF sem formatação quando o usuário digita
cpfInputPoint.addEventListener("input", function () {
  const cpfWithoutFormat = unformateCPF(cpfInputPoint.value); // Captura o valor sem formatação
  cpfOutputPoint.textContent = cpfWithoutFormat; // Exibe o CPF sem formatação no campo de saída
});
