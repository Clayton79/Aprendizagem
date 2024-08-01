// Função rand que recebe um array e usa desestruturação para extrair min e max
function rand([min = 0, max = 1000] = []) {
    // Se min for maior que max, inverte os valores
    if (min > max) [min, max] = [max, min];
    // Gera um valor aleatório entre min e max
    const valor = Math.random() * (max - min) + min;
    // Retorna o valor arredondado para baixo
    return Math.floor(valor);
}

// Chama a função rand passando o array [50, 40]
console.log(rand([50, 40])); // Esperado: um número aleatório entre 40 e 50

// Chama a função rand passando o array [992], onde max usa o valor padrão 1000
console.log(rand([992])); // Esperado: um número aleatório entre 992 e 1000

// Chama a função rand passando o array [, 10], onde min usa o valor padrão 0
console.log(rand([, 10])); // Esperado: um número aleatório entre 0 e 10

// Chama a função rand passando o array vazio, onde min e max usam os valores padrão 0 e 1000
console.log(rand([])); // Esperado: um número aleatório entre 0 e 1000

// Chama a função rand sem argumentos, resultando em erro porque a função espera um array
console.log(rand()); // Erro: Cannot destructure property '0' of 'undefined' or 'null'.