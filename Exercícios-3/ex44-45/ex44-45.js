//* 44. Crie um campo de texto onde o usuário pode inserir o nome de um animal. Ao clicar no botão, o nome do animal será adicionado a uma lista (ul) em ordem alfabética no HTML. Se o campo estiver vazio, exiba uma mensagem de alerta.

// Seleciona o campo de input onde o usuário irá digitar o nome do animal
let animalInput = document.getElementById("animalInput");

// Inicializa um array vazio para armazenar os nomes dos animais
let arrayAnimais = [];

// Seleciona o botão que o usuário irá clicar para adicionar o animal
let btn = document.getElementById("btn");

// Seleciona a lista (ul) onde os nomes dos animais serão exibidos
let listaAnimais = document.getElementById("lista-animais");

// Adiciona um evento de clique ao botão
btn.addEventListener("click", function () {
  // Pega o valor do input, removendo espaços em branco no início e no final
  let animal = animalInput.value.trim();

  // Verifica se o valor é um número ou se está vazio
  if (!isNaN(animal) || animal === "") {
    // Se o valor não for válido, exibe um alerta para o usuário
    alert("Digite apenas caracteres válidos: letras");
  } else {
    // Adiciona o nome do animal ao array
    arrayAnimais.push(animal);
    // Ordena o array em ordem alfabética
    arrayAnimais.sort();
    // Limpa a lista na tela antes de re-exibir os itens
    listaAnimais.innerHTML = "";
    // Para cada animal no array
    arrayAnimais.forEach(function (animal) {
      // Cria um novo elemento de lista (li)
      let li = document.createElement("li");
      // Define o texto do elemento li como o nome do animal
      li.textContent = animal;
      // Adiciona o elemento li à lista (ul) no HTML
      listaAnimais.appendChild(li);
    });
    // Limpa o campo de entrada para que o usuário possa digitar um novo animal
    animalInput.value = "";
  }
});

//* 45.  Crie um campo de texto onde o usuário pode inserira uma data. Ao clicar no botão, a data será adicionado a uma lista (ul) em ordem decrescente (da mais antiga para mais atual) no HTML. Se o campo estiver vazio, exiba uma mensagem de alerta.

let dateInput = document.getElementById("data"); // Seleciona o campo de entrada de data
let arrayDatas = []; // Inicializa um array para armazenar as datas
let btnDate = document.getElementById("btn-data"); // Seleciona o botão que adiciona a data
let listaDatas = document.getElementById("lista-datas"); // Seleciona a lista onde as datas serão exibidas

btnDate.addEventListener("click", function () {
  let data = dateInput.value.trim(); // Pega o valor da entrada e remove espaços em branco

  // Verifica se o campo de entrada está vazio
  if (data === "") {
    alert("Por favor, insira uma data."); // Alerta se o campo estiver vazio
    return; // Interrompe a execução da função
  }

  // Adiciona a data ao array
  arrayDatas.push(data);

  // Ordena as datas do mais antigo para o mais recente
  arrayDatas.sort((a, b) => new Date(a) - new Date(b));
  // Limpa a lista antes de re-exibir as datas
  listaDatas.innerHTML = "";
  // Para cada data no array
  arrayDatas.forEach(function (data) {
    // Converte a data de aaaa-mm-dd para dd/mm/aaaa
    let partesData = data.split("-"); // Divide a string da data
    let dataFormatada = `${partesData[2]}/${partesData[1]}/${partesData[0]} `; // Formata como dd/mm/aaaa
    // Cria um novo elemento de lista (li)
    let li = document.createElement("li");
    li.textContent = dataFormatada; // Define o texto do li como a data formatada
    // Adiciona o elemento li à lista (ul) no HTML
    listaDatas.appendChild(li);
  });
  // Limpa o campo de entrada
  dateInput.value = "";
});
