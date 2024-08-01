// Desestrutura o primeiro elemento do array e atribui à variável 'a'
const [a] = [10];
console.log(a); // Esperado: 10

// Desestrutura o array e atribui os valores a variáveis
const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8];
// n1 recebe 10, n3 recebe 9, n5 não está definido no array, então recebe undefined, n6 recebe 0 como valor padrão
console.log(n1, n3, n5, n6); // Esperado: 10 9 undefined 0

// Desestrutura um array de arrays e obtém o valor da variável 'nota'
const [, [, nota]] = [[, 8, 8],[9, 6, 8]]; // não recomendavel usar dessa forma.
// Primeiro elemento da array externa é ignorado, então, de fato, estamos pegando o segundo array da array externa
// E dentro desse segundo array, pegamos o segundo elemento (nota) que é 6
console.log(nota); // Esperado: 6