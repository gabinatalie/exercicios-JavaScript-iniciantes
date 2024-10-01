//* 38. Crie o seguinte array var frutas = [uva, maça, banana, abacate, limão, pêssego, morango, ameixa, romã, cereja, amora]. Exiba a quantidade/comprimento que ele tem. (length)

// Criação do array "frutas" com vários itens
const frutas = [
  "uva", // Primeiro item do array
  "maça", // Segundo item do array 
  "banana", // Terceiro item do array
  "abacate", // Quarto item do array
  "limão", // Quinto item do array
  "pêssego", // Sexto item do array
  "morango", // Sétimo item do array (
  "ameixa", // Oitavo item do array
  "romã", // Nono item do array
  "cereja", // Décimo item do array
  "amora", // Décimo primeiro item do array
];

// Exibe a quantidade de itens no array "frutas" usando a propriedade length
console.log(`O array frutas possui ${frutas.length} itens.`);

//* 39. Utilizando o array acima, exiba os itens um a um utilizando alert() - De preferência para laços de repetição (for, forEach, while, do{}while)

// Laço de repetição 'for' para percorrer todos os itens do array "frutas"
for (i = 0; i < frutas.length; i++) {
  // Exibe o item atual do array utilizando a função alert
  alert(frutas[i]);
}
