//* 40. Crie o seguinte array: var filmes = ['Clube da Luta', 'V de Vingança', 'Cisne Negro', 'Garota Interrompida']. Exiba um a um com alert()- De preferência para funções com callbacks, Ex:(map, reduzir, filtrar)

// Criação do Array de filmes
const movies = [
  "Fight Club",
  "V for Vendetta",
  "Black Swan",
  "Girl Interrupted"
]

// Utilizando map()
movies.map(function (movie) {
  return alert(movie); //Exibe cada filme individualmente
}); 

//Utilizando reduce()
//para testar as outras formas, vou criar outro array, para podermos testas todas as 3 no mesmo código.

// Criação do Array de séries
const series = [
  "Euphoria",
  "Skins",
  "Friends",
  "Orphan Black",
  "Killin Eve"
]

// Usando reduce para exibir as séries
series.reduce(function (_, serie) {
  alert(serie); // Exibe cada série individualmente
  return ""; // O acumulador não é importante nesse caso, então apenas retorna uma string vazia
}, '') // Valor inicial é uma string vazia


//Utilizando filter()

// Criação do Array de atrizes
const atrizes = [
  "Angelina Jolie",
  "Natalie Portman",
  "Winona Ryder",
  "Jennifer Lawrence"
]
// Usando filter para exibir todas as atrizes
atrizes.filter(function (atriz) {
  alert(atriz); // Exibe cada filme individualmente
  return true; // Retorna true para que todos os itens passem no filtro
})