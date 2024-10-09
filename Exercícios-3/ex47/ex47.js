//* 47. 
// Pegando os elementos necessários
let button = document.getElementById("btn");
let character = document.getElementById("char");

// Definindo as imagens

const images = [
  "/Exercícios-3/ex47/img/chara-1.png",
  "/Exercícios-3/ex47/img/chara-2.png",
  "/Exercícios-3/ex47/img/chara-3.png",
];

let currentImageIndex = 0; // Para alternar entre as imagens
let position = 0; // Para controlar a posição da imagem
let intervalId = null; // Para armazenar o intervalo e poder parar
const duration = 38 * 1000; // 40 segundos

// Função para alternar entre as imagens
function changeImage() {
  currentImageIndex = (currentImageIndex + 1) % images.length; // Alterna entre 1, 2 e 3
  character.src = images[currentImageIndex];
}

// Função para mover o boneco
function moveCharacter() {
  position += 10; // Move 10px a cada iteração
  character.style.left = position + "px"; // Atualiza a posição horizontal
}

// Função que inicia o movimento e a troca de imagens
function startWalking() {
  if (intervalId) return; // Evita múltiplos cliques começando novos intervalos

  intervalId = setInterval(() => {
    changeImage();
    moveCharacter();
  }, 200); // Troca a cada 100ms

  // Para o boneco após 10 segundos
  setTimeout(() => {
    clearInterval(intervalId); // Para o movimento
    intervalId = null; // Reseta o intervalo
  }, duration);
}

// Adiciona evento de clique no botão
button.addEventListener("click", startWalking);
