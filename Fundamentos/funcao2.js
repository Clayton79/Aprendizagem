// Função armazenada em uma variável, usando a sintaxe de função anônima
const imprimirSoma = function(a, b) {
    console.log(a + b);
};

// Chama a função passando 2 e 3 como argumentos
imprimirSoma(2, 3); // Esperado: 5 (2 + 3)

// Função arrow com retorno explícito
const soma = (a, b) => {
    return a + b;
};

// Chama a função passando 2 e 3 como argumentos
console.log(soma(2, 3)); // Esperado: 5 (2 + 3)

// Função arrow com retorno implícito
const subtracao = (a, b) => a - b;

// Chama a função passando 2 e 3 como argumentos
console.log(subtracao(2, 3)); // Esperado: -1 (2 - 3)