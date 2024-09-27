# Exercícios de JavaScript (JS)

## Hello, Word!

Aqui você vai encontrar uma lista de exercícios para quem tem interesse em aprender e praticar JavaScript.

São exercícios simples, focado em quem quer compreender melhor lógica de programação!

Todos os exercícios foram resolvidos por mim, então é possível consultar as respostas caso não esteja conseguindo sozinho!

Mas vale lembrar que existem várias maneiras de resolver um problema, então se a sua resposta estiver diferente da minha, não significa que está errada.

Uma das vantagens de se começar a programar pelo JavaScript seria a premissa que todos tem um Browser/Navegador e um editor disponível.

Eu utilizo o [VS-Code](https://code.visualstudio.com/Download), é rapido é simples <del>é barato</del> é de graça.

Para utilização do Prompt de perguntas ao usuário, eu utilizei o [npm-readline-sync](https://www.npmjs.com/package/readline-sync)

A documentação acima ensina como fazer o download dentro do seu projeto, assim você consegue criar um Prompt de pergunta onde o usuário pode inserir a resposta através do terminal/console. Mas caso não queira utilizar o prompt para receber o valor solicitado, esse valor pode ser passado diretamente no JavaScript, como teste.

OBS: Os valores inseridos através de prompt e input são no formato <b>String</b>. Para realizar operações matemáticas é necessário converte-los para <b>Number</b>

## Vamos lá!

**Variáveis e Funções**

1. Faça um programa que exiba 3 números na tela.

2. Faça um programa que leia 3 números e exiba-os na tela.

3. Faça um programa que leia do usuário uma temperatura em Fahrenheit, converta-a para graus Celsius e escreva o novo valor na tela. A fórmula de conversão de Fahrenheit (F) para Celsius é C = ( ( F - 32 ) \* 5 ) / 9. Exemplo: 100 Fahrenheit = 37,77 Celsius.

[Resposta](/Exercícios-1/Variaveis-funcoes.js)

**Lógica**

1. Faça um programa que leia um número e verifique se ele é par ou ímpar. Exiba uma mensagem indicando o resultado.

2. Faça um programa que leia três números e exiba o maior entre eles.

3. Faça um programa que leia um número e determine se ele é positivo, negativo ou zero.

[Resposta](/Exercícios-1/Lógica.js)

**Condicionais**

1. Faça um programa que leia 2 números, some-os e exiba uma mensagem com o resultado apenas se o resultado for maior que 100.

2. Para um jogo, precisamos saber se um personagem morreu ou não depois de sofrer um ataque. Faça uma função que receba 2 parâmetros, 'dano' e 'saude'. A função deve retornar '1' se o dano for matar o personagem (ou seja, deixar sua saúde menor ou igual a zero) e '0' caso contrário.

3. Precisamos limitar as posições em que um inimigo pode andar na tela. A menor posição possível é 0 e a maior, 100: qualquer valor maior que 100 ou menor que 0 sairia fora da tela. Precisamos de uma função LimitaPosicao que recebe uma POSICAO que pode ter qualquer valor positivo ou negativo, verifica se ela é válida ou não e retorna sempre um valor corrigido entre 0 e 100.

[Resposta](/Exercícios-1/Condicionais.js)

**Loop**

1. Escreva um programa que calcule e mostre a tabuada(até 10x) de um número qualquer, digitado pelo usuário.

[Resposta](/Exercícios-1/Loop.js)

**Array/Vetor**

1. Faça um programa que leia um vetor numérico de 10 posições. Depois, ordene o vetor em ordem crescente e apresente os elementos ordenados.

[Resposta](/Exercícios-1/Array.js)

Essa primeira lista de exercícios consegui através do: [repositório](https://github.com/tiagovignatti/exercicios-javascript)

# Mais exercícios:

A partir daqui, os exercícios foram retirados do: [reposiótio](https://github.com/gabrieldarezzo/helpjs-ravi)

1. Imprima 'Hello World!' no console.

[Resposta](/Exercícios-2/ex-1/exercicio1.js)

2. Faça a mensagem "Olá" em um arquivo javascript externo e chame ela importando.

[Resposta](/Exercícios-2/ex-2/)

3. Faça uma saída de soma de 2 inteiros, ex: alert(2 + 2)

[Resposta](/Exercícios-2/ex-3/)

4. No HTML Crie:
   1 - Campo/Input do tipo text para preencher o nome completo.
   1 - Botão com o texto: 'Exibir Nome' e ao clicar neste botão é exibido um alert com o valor do campo nome completo, ex: ' O Nome Completo é: "xxxx". '

[Resposta](/Exercícios-2/ex-4/)

5. Exiba a quantidade de letras que possuem o texto inserido ao clicar no botão

[Resposta](/Exercícios-2/ex-5/)

6. No seu HTML exiba a imagem de uma lampada, ao clicar em cima da lampada, troque o src dela para a lampada que está acessa.

7. Agora que você já sabe utilizar o evento 'click', aprenda a usar o 'mouseover', ao passar o mouse em cima da 'lampada.jpg' altere ela para 'lampada-on.jpg'

[Fonte-das-imagens](/Exercícios-2/ex-6-7/assets/)
[Respostas](/Exercícios-2/ex-6-7/)

8. Faça 2 campos no HTML chamados: 'Nome', 'Sobrenome' e um botão 'Saudação'; ao clicar no botão exibir um alert:
   "Olá {NOME} {SOBRENOME}";

[Resposta](/Exercícios-2/ex-8/)

9. Crie um campo texto parar preencher um CPF <input maxlength="11" id="cpf" />, e exiba ao lado com pontuação conforme preencher.

10. Preencha um CPF com pontuação <input maxlength="14" id="cpfPoint" /> e no campo ao lado exiba sem pontuação.

[Respostas](/Exercícios-2/ex-9-10/)

11. No HTML crie:
    2 x - Campo/Input do tipo text. (id=soma1, id=soma2)
    1 x - Botão (id=btn-soma)
    1 x - Campo (id=resultado-soma)
    Caso esteja preenchido um valor númerico nos dois campos(id=soma1, id=soma2), o resultado da soma devera aparecer no campo (id=resultado-soma) ao clicar no botão (id=btn-soma).

[Resposta](/Exercícios-2/ex-11/)

12. Crie dois botões no HTML chamados: 'Verde', ,'Vermelho'. ao clicar neles, o style="background-color: {COR-SELECIONADA}" vai ser alterado dinamicamente

[Resposta](/Exercícios-2/ex-12/)

13. Crie uma div vazia cujo o id dela é 'resultado' Insira via JavaScript assim que a tela carregar o seguinte texto: 'Esse texto foi inserido pelo JavaScript...'

14. Agora crie um botão que ao ser clicado faça a mesma ação do exercício anterior.

[Respostas](/Exercícios-2/ex-13-14/)

15. Crie uma função que recebe 2 parâmetros e retorna a soma deles.

16. Crie uma função que recebe 2 parâmetros e retorna a soma deles, porém caso seja passado um parâmetro vazio ela retorna zero.

17. Exiba o 'resto' da próxima divisão: (5/2)

[Respostas](/Exercícios-2/ex-15-16-17/ex15-16-17.js)

18. Crie uma função que receba um número como parâmetro e retorne se ele é ímpar ou par.

19. Crie uma função que recebe 2 parâmetros e retorna a multiplicação deles.

[Respostas](/Exercícios-2/ex-18-19/ex18-19.js)

20. Crie uma função que calcula 5% de desconto retornando o valor com desconto.

21. Crie uma função que recebe o ano de nascimento da pessoa informando se ela é maior de idade ou menor.

[Respostas](/Exercícios-2/ex-20-21/ex20-21.js)

22. Dentro da div com o id 'resultado', escreva 1x ('Repetição'). dica: utilize innerHTML = 'Repetição';

23. Dentro da div com o id 'resultado2', escreva 2x ('Repetição').

24. Dentro da div com o id 'resultado20', escreva 20x ('Repetição'). (Use o 'for' pelo amor de deus)

25. Dentro da div com o id 'resultado-foreach', escreva 5x ('Repetição'). (agora com forEach)

26. Dentro da div com o id 'resultado-while', escreva 5x ('Repetição'). (agora com while)

27. Dentro da div com o id 'resultado-dowhile', escreva 5x ('Repetição'). (agora com do while)

[Respostas](/Exercícios-2/ex-22ate27/)

28. Dentro da div com o id 'resultado', escreva os números de 0 a 10.

29. Dentro da div com o id 'resultado2', escreva os números pares até 20 - (2,4,6,8,10...20)

30. Exiba a tabuada do 1 até o 10

[Respotas](/Exercícios-2/ex-28-30/)

31. Crie uma função que informa se tem os caracteres 'novo' no parâmetro informado. (ex: Esse livro é novo = true | Aquele livro é usado = false)

[Resposta](/Exercícios-2/ex-31/ex31.js)

32. Exiba aleatoriamente um número pelo alert()

33. Agora faça um botão para clicar nele para informar se a pessoa acertou o número.

[Resposta](/Exercícios-2/ex-32-33/)

34. Exiba a data atual pelo JavaScript no seguinte formato: dia/mês/Ano

35. Exiba o próximo mês (dinamicamente)

[Resposta](/Exercícios-2/ex-34-35/ex34-35.js)

36. Crie o seguinte array: var deusas = ['Athenas', 'Aphrodite', 'Perséfone']. Adicione os 3 Deuses: ('Hera', 'Nix', 'Freya') com a função push()

37.  Crie o seguinte array: var numbers = [5, 7, 1, 8, 9] E exiba de forma decrescente.

[Resposta](/Exercícios-2/ex-36-37/ex36-37.js)