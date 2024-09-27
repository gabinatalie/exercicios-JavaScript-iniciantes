//* 31. Crie uma função que informa se tem os caracteres 'novo' no parâmetro informado.
//* Esse livro é novo = true | Aquele livro é usado = false

function verificarNovo(frase) {
  // Converte a frase toda para minúsculas para garantir que a comparação seja insensível a maiúsculas/minúsculas
  let fraseMinuscula = frase.toLowerCase();

  // Verifica se a palavra 'novo' está presente na frase
  if (fraseMinuscula.includes("novo")) {
    return true; // Se encontrar 'novo', retorna verdadeiro
  } else {
    return false; // Se não encontrar, retorna falso
  }
}

console.log(verificarNovo("Esse livro é novo!")); // Verdadeiro
console.log(verificarNovo("Aquele livro é usado!")); // Falso
console.log(verificarNovo("Ele comprou um novo carro!")); // Verdadeiro
