function avaliarNota (nota) {
    if (nota >= 90) {
        return "Excelente"
    } else if (nota >= 70 && nota <= 89) {
        return "Bom"
    } else if (nota >= 50 && nota <= 69) {
        return "Suficiente"
    } else {
        return "Insuficiente"
    }
    
}

console.log(`A Nota do Aluno é ${avaliarNota(50)}`)