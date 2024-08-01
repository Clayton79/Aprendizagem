// Declara uma função anônima e a atribui à constante imprimirResultado
const imprimirResultado = function (nota) {
    // Usa o switch para escolher um caso com base no valor arredondado da nota
    switch ((Math.floor)(nota)) {
        // Se nota for 10 ou 9, imprime "Quadro de Honra"
        case 10:
        case 9:
            console.log("Quadro de Honra")
            break
        // Se nota for 8 ou 7, imprime "Aprovado"
        case 8:
        case 7:
            console.log("Aprovado")
            break
        // Se nota for 6, 5 ou 4, imprime "Recuperação"
        case 6:
        case 5:
        case 4:
            console.log("Recuperação")
            break
        // Se nota for 3, 2, 1 ou 0, imprime "Reprovado"
        case 3:
        case 2:
        case 1:
        case 0:
            console.log("Reprovado")
            break
        // Para qualquer outro valor (notas inválidas), imprime "Nota inválida"
        default:
            console.log("Nota inválida")
    }
}

// Testa a função imprimirResultado com diferentes valores de nota
imprimirResultado(10)    // Esperado: "Quadro de Honra"
imprimirResultado(8.9)   // Esperado: "Aprovado"
imprimirResultado(6.55)  // Esperado: "Recuperação"
imprimirResultado(2.3)   // Esperado: "Reprovado"
imprimirResultado(-1)    // Esperado: "Nota inválida"
imprimirResultado(11)    // Esperado: "Nota inválida"
