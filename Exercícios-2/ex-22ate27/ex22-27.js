//* 22. Dentro da div com o id 'resultado', escreva 1x ('Repetição'). dica: utilize innerHTML = 'Repetição';

// Seleciona a div com o id 'resultado'
let resultadoDiv = document.getElementById("resultado");

// Define o conteúdo da div como 'Repetição'
resultadoDiv.innerHTML = "Repetição";

//* 23. Dentro da div com o id 'resultado2', escreva 2x ('Repetição').

// Seleciona a div com o id 'resultado2'
let resultadoDivDois = document.getElementById("resultado2");

// Define o conteúdo da div como 'Repetição Repetição'
resultadoDivDois.innerHTML = "Repetição Repetição";

//* 24. Dentro da div com o id 'resultado20', escreva 20x ('Repetição'). (Use o 'for' pelo amor de deus)

// Seleciona a div com o id 'resultado20'
let resultadoDivVinte = document.getElementById("resultado20");

// Loop para adicionar 'Repetição' 20 vezes à div
for (i = 1; i <= 20; i++) {
  resultadoDivVinte.innerHTML += "Repetição "; // Usa '+=' para adicionar ao conteúdo existente
}

//* 25. Dentro da div com o id 'resultado-foreach', escreva 5x ('Repetição'). (agora com forEach)

// Array com 5 elementos (pode ser qualquer array)
const repeticoes = [1, 2, 3, 4, 5];

// Seleciona a div onde as repetições serão inseridas
let resultadoForEach = document.getElementById("resultado-foreach");

// Usando forEach para escrever 'Repetição' 5 vezes
repeticoes.forEach(function () {
  resultadoForEach.innerHTML += "Repetição "; // Adiciona 'Repetição' ao conteúdo da div
});

//* 26. Dentro da div com o id 'resultado-while', escreva 5x ('Repetição'). (agora com while)

// Seleciona a div com o id 'resultado-while'
let resultadoWhile = document.getElementById("resultado-while");

// Aqui estou usando 'x' como contador ao invés de 'i' que seria mais comum, pois essa variável já está sendo utilizada nos códigos acima, gerando conflito.
let x = 1;

// Loop while que escreve 'Repetição' 5 vezes
while (x <= 5) {
  resultadoWhile.innerHTML += "Repetição "; // Adiciona 'Repetição' ao conteúdo da div
  x++; // Incrementa o contador
}

//* 27. Dentro da div com o id 'resultado-dowhile', escreva 5x ('Repetição'). (agora com do while)

// Seleciona a div com o id 'resultado-dowhile'
let resultadoDoWhile = document.getElementById("resultado-dowhile");

// Inicializa o contador 'y'
let y = 1;

// Loop do while que escreve 'Repetição' 5 vezes
do {
  resultadoDoWhile.innerHTML += "Repetição "; // Adiciona 'Repetição' ao conteúdo da div
  y++; // Incrementa o contador
} while (y <= 5); // Continua enquanto 'y' for menor ou igual a 5
