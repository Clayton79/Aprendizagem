// Declara uma função que imprime um resultado com base na nota fornecida
const imprimirResultado = function(nota) {
    // Verifica se a nota é maior ou igual a 7
    if (nota >= 7) {
        console.log("Aprovado!")
    } else {
        // Caso a nota seja menor que 7, imprime "Reprovado"
        console.log("Reprovado")
    }
}

// Testa a função imprimirResultado com diferentes valores de nota
imprimirResultado(10)    // Esperado: "Aprovado!"
imprimirResultado(4)     // Esperado: "Reprovado"
imprimirResultado("Epa!") // Cuidado! Isso pode causar um comportamento inesperado
