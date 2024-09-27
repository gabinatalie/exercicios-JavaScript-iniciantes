// * 6. No seu HTML, exiba a imagem de uma lâmpada. Ao clicar em cima da lâmpada, troque o src dela para a lâmpada que está acesa.

let lampada = document.getElementById("lampada-off"); // Recebe a imagem da lâmpada apagada

// Adiciona um evento ao clicar na lâmpada
lampada.addEventListener("click", function () {
  // Verifica se o src da lâmpada contém a imagem da lâmpada apagada
  if (lampada.src.includes("lampada.jpg")) {
    // Troca o src para a imagem da lâmpada acesa
    lampada.src = "/Exercícios-2/ex-6-7/assets/lampada-on.jpg";
  } else {
    // Troca o src de volta para a lâmpada apagada
    lampada.src = "/Exercícios-2/ex-6-7/assets/lampada.jpg";
  }
});

// * 7. Agora que você já sabe utilizar o evento 'click', aprenda a usar o 'mouseover'.
// Ao passar o mouse em cima da 'lampada.jpg', altere para 'lampada-on.jpg'.

let lampadaOff = document.getElementById("lampada"); // Recebe a imagem da lâmpada para o evento 'mouseover'

// Adiciona um evento ao passar o mouse sobre a lâmpada
lampadaOff.addEventListener("mouseover", function () {
  // Verifica se o src da lâmpada contém a imagem da lâmpada apagada
  if (lampadaOff.src.includes("lampada.jpg")) {
    // Troca o src para a imagem da lâmpada acesa
    lampadaOff.src = "/Exercícios-2/ex-6-7/assets/lampada-on.jpg";
  } else {
    // Troca o src de volta para a lâmpada apagada se necessário
    lampadaOff.src = "/Exercícios-2/ex-6-7/assets/lampada.jpg";
  }
});
