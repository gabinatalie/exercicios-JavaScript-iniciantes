// ! Vetores (array)

//* 1. Faça um programa que leia um vetor numérico de 10 posições.
//* Depois, ordene o vetor em ordem crescente e apresente os elementos ordenados.

let array = [1, 56, 77, 45, 101, 123, 145, 378, 671, 821]; // Inicializa um vetor numérico com 10 posições

// Ordena o vetor em ordem crescente utilizando a função sort e uma função de comparação
array.sort((a, b) => a - b);

// Exibe uma mensagem informando que os elementos estão sendo apresentados em ordem crescente
console.log("Elementos em ordem crescente: ");
// Percorre o vetor e imprime cada elemento ordenado
for (let i = 0; i < array.length; i++) {
  console.log(array[i]); // Exibe o elemento na posição i do vetor
}
