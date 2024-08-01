// Declaração de duas variáveis de peso
const peso1 = 1.0; // Peso 1, um número de ponto flutuante
const peso2 = Number('2.0'); // Peso 2, convertido de string para número

console.log(peso1, peso2); // Exibe os valores de peso1 e peso2: 1.0 e 2.0
console.log(Number.isInteger(peso1)); // Verifica se peso1 é um inteiro (true, pois 1.0 é tratado como 1)
console.log(Number.isInteger(peso2)); // Verifica se peso2 é um inteiro (true, pois 2.0 é tratado como 2)

// Declaração de duas variáveis de avaliação
const avaliacao1 = 9.871; // Nota 1
const avaliacao2 = 6.871; // Nota 2

// Calcula o total ponderado das avaliações
const total = avaliacao1 * peso1 + avaliacao2 * peso2; // Total ponderado das avaliações
// Calcula a média ponderada
const media = total / (peso1 + peso2); // Média ponderada das avaliações

// Exibe a média com duas casas decimais
console.log(media.toFixed(2)); // toFixed(2) formata o número para duas casas decimais

// Exibe a média em formato binário
console.log(media.toString(2)); // toString(2) converte a média para uma string em base binária

// Exibe o tipo de 'media'
console.log(typeof media); // Exibe 'number', pois media é um número

// Exibe o tipo de 'Number'
console.log(typeof Number); // Exibe 'function', pois Number é uma função construtora