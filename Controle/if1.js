// Declara a função soBoaNoticia
function soBoaNoticia(nota) {
    // Verifica se a nota é maior ou igual a 7
    if (nota >= 7) {
        // Imprime a mensagem de aprovação com a nota
        console.log("Aprovado com " + nota)
    }
}

// Testa a função soBoaNoticia com diferentes valores de nota
soBoaNoticia(8.1) // Esperado: "Aprovado com 8.1"
soBoaNoticia(6.1) // Esperado: (nada, porque 6.1 é menor que 7)


// Declara a função seForVerdadeEuFalo
function seForVerdadeEuFalo(valor) {
    // Verifica se o valor é verdadeiro
    if (valor) {
        // Imprime a mensagem com o valor
        console.log("É verdade... " + valor)
    }
}

// Testa a função seForVerdadeEuFalo com diferentes valores
seForVerdadeEuFalo()           // Esperado: (nada, porque undefined é falso)
seForVerdadeEuFalo(null)       // Esperado: (nada, porque null é falso)
seForVerdadeEuFalo(undefined)  // Esperado: (nada, porque undefined é falso)
seForVerdadeEuFalo(NaN)        // Esperado: (nada, porque NaN é falso)
seForVerdadeEuFalo("")         // Esperado: (nada, porque string vazia é falsa)
seForVerdadeEuFalo(0)          // Esperado: (nada, porque 0 é falso)