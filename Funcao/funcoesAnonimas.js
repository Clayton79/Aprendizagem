// Define uma função chamada soma que recebe dois parâmetros (x e y)
// e retorna a soma deles
const soma = function (x, y) {
    return x + y; // Retorna a soma de x e y
}

// Define uma função chamada imprimirResultado que recebe três parâmetros:
// a, b e operacao. O parâmetro operacao tem um valor padrão que é a função soma.
const imprimirResultado = function (a, b, operacao = soma) {
    // Chama a função operacao passando a e b como argumentos e imprime o resultado no console
    console.log(operacao(a, b));
}

// Chama imprimirResultado com os valores 3 e 4
// Como não foi passada uma função de operação, o padrão é a função soma
imprimirResultado(3, 4); // Resultado esperado: 7

// Chama imprimirResultado com os valores 3 e 4 e a função soma como operação
imprimirResultado(3, 4, soma); // Resultado esperado: 7

// Chama imprimirResultado com os valores 3 e 4 e uma função anônima que subtrai b de a
imprimirResultado(3, 4, function (x, y) {
    return x - y; // Retorna a diferença entre x e y
}); // Resultado esperado: -1

// Chama imprimirResultado com os valores 3 e 4 e uma função de seta que multiplica a e b
imprimirResultado(3, 4, (x, y) => x * y); // Resultado esperado: 12

// Define um objeto chamado pessoa com um método chamado falar
const pessoa = {
    // Define o método falar, que imprime "Opa" no console quando chamado
    falar: function () {
        console.log("Opa");
    }
}

// Chama o método falar do objeto pessoa
pessoa.falar(); // Resultado esperado: "Opa"