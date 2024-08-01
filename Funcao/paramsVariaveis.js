function soma() {
    // Inicializa a variável soma com 0
    let soma = 0
    
    // Itera sobre os argumentos passados para a função usando 'for...in'
    for (i in arguments) {
        // Adiciona o valor do argumento atual à variável soma
        soma += arguments[i]
    }
    
    // Retorna a soma total
    return soma
}

// Testa a função com diferentes conjuntos de argumentos
console.log(soma()) // Nenhum argumento: soma será 0
console.log(soma(1)) // Um argumento: soma será 1
console.log(soma(1.1, 2.2, 3.3)) // Vários argumentos: soma será 6.6

// Testa a função com uma combinação de números e strings
console.log(soma(1.1, 2.2, "Teste")) // Soma de números e string: soma será NaN
console.log(soma("a", "b", "c")) // Todos argumentos são strings: soma será '0abc'