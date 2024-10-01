//* 41. Crie o seguinte array: var singers = ["Madonna", "Lana Del Rey", "Beyoncé", "Lauryn Hill", "Amy Whinehouse", "Hayley Williams", "Kehlani", "Camila Cabello"] E exiba todos os nomes, dentro do html:<ul id="nomes"></ul>

//Cria o array cantoras
const singers = [
  "Madonna",
  "Lana Del Rey",
  "Beyoncé",
  "Lauryn Hill",
  "Amy Whinehouse",
  "Hayley Williams",
  "Kehlani",
  "Camila Cabello",
];

// Seleciona o elemento <ul> com o id "nomes"
let nomes = document.getElementById("nomes");

// Percorre o array de cantoras e cria um item de lista <li> para cada uma
singers.forEach(function (singer) {
  let li = document.createElement("li"); // Cria um novo elemento <li>
  li.textContent = singer; // Define o texto do <li> como o nome da cantora
  nomes.appendChild(li); // Adiciona o <li> dentro da <ul> "nomes"
});

//* 42. Crie um campo de texto no html que armazena o conteúdo em um array sempre que você clica no botão, e apresenta em uma lista(ul)
// Seleciona o campo de texto e a lista
const comidaInput = document.getElementById("comidas");
let lista = document.getElementById("lista-comidas");
// Cria um array para armazenar as comidas
let comidasArray = [];

// Seleciona o botão
let btn = document.getElementById("btn-comidas");

btn.addEventListener("click", function () {
  // Pega o valor do input
  const comida = comidaInput.value.trim(); // Remove espaços em branco
  // Verifica se o campo não está vazio
  if (comida) {
    // Adiciona a comida ao array
    comidasArray.push(comida);
    // Cria um novo item de lista
    let li = document.createElement("li");
    li.textContent = comida; // Define o texto do <li>
    // Adiciona o <li> à lista
    lista.appendChild(li);
    // Limpa o campo de texto
    comidaInput.value = " ";
  }
});

//* 43. Crie um campo texto no html que armazena o números em um array sempre que você clica no botão, e apresenta em uma lista(ul) destacando os números pares.
//seleciona o input
let numeros = document.getElementById("numeros");

//inicia um array para armazenar os valores inseridos no input
let arrayNumeros = [];
//seleciona o botão
let buttonPar = document.getElementById("btn-pares");
//seleciona a lista onde serão inclusos os números pares do array.
let listaPar = document.getElementById("pares");
// Adiciona o evento de clique ao botão
buttonPar.addEventListener("click", function () {
  //seleciona o valor inserido no input
  let numeroPar = numeros.value.trim();
  // Verifica se o valor é um número válido
  if (isNaN(numeroPar) || numeroPar === "") {
    alert("Insira apenas números");
  } else {
    // Converte o valor para número e adiciona ao array
    numeroPar = parseFloat(numeroPar);
    arrayNumeros.push(numeroPar);
    // Verifica se o número é par
    if (numeroPar % 2 === 0) {
      // Cria um novo item de lista
      let li = document.createElement("li");
      li.textContent = numeroPar;
      // Exibe o número par

      // Adiciona o <li> à lista
      listaPar.appendChild(li);
    }
    // Limpa o campo de texto
    numeros.value = "";
  }
  console.log(arrayNumeros);
});
