//* 36. Crie o seguinte array: var deusas = ['Athenas', 'Aphrodite', 'Perséfone']. Adicione os 3 Deuses: ('Hera', 'Nix', 'Freya') com a função push()

let deusas = ["Athenas", "Aphrodite", "Perséfone"];

// Exibe no console o array 'deusas' original
console.log(deusas);

// O método 'push' adiciona os novos elementos ao final do array
deusas.push("Hera", "Nix", "Freya");

// Exibe no console o array atualizado com os novos elementos adicionados
console.log(deusas);

//* 37. Crie o seguinte array: var numbers = [5, 7, 1, 8, 9] E exiba de forma decrescente.
//Cria o array
let number = [5, 7, 1, 8, 9];
//  Ordena o array em ordem decrescente utilizando a função sort e uma função de comparação
number.sort((b, a) => a - b);
// Percorre o vetor e imprime cada elemento ordenado
for (let i = 0; i < number.length; i++) {
  console.log(number[i]); // Exibe o elemento na posição i do vetor
}
