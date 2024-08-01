// Adiciona um método 'entre' ao protótipo de Number
Number.prototype.entre = function (inicio, fim) {
    // Verifica se o número (this) está entre inicio e fim, inclusive
    return this >= inicio && this <= fim
}

// Declara uma função que imprime um resultado com base na nota fornecida
const imprimirResultado = function (nota) {
    // Se a nota estiver entre 9 e 10 (inclusive), imprime "Quadro de Honra"
    if (nota.entre(9, 10)) {
        console.log("Quadro de Honra")
    // Se a nota estiver entre 7 e 8.99 (inclusive), imprime "Aprovado"
    } else if (nota.entre(7, 8.99)) {
        console.log("Aprovado")
    // Se a nota estiver entre 4 e 6.99 (inclusive), imprime "Recuperação"
    } else if (nota.entre(4, 6.99)) {
        console.log("Recuperação")
    // Se a nota estiver entre 0 e 3.99 (inclusive), imprime "Reprovado"
    } else if (nota.entre(0, 3.99)) {
        console.log("Reprovado")
    // Para qualquer outro valor, imprime "Nota inválida"
    } else {
        console.log("Nota inválida")
    }
}

// Testa a função imprimirResultado com diferentes valores de nota
imprimirResultado(10)    // Esperado: "Quadro de Honra"
imprimirResultado(8.9)   // Esperado: "Aprovado"
imprimirResultado(6.55)  // Esperado: "Recuperação"
imprimirResultado(2.3)   // Esperado: "Reprovado"
imprimirResultado(-1)    // Esperado: "Nota inválida"
