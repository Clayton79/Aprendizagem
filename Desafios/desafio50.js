function classificarNota(nota) {
    switch (true) {
        case nota === 10:
            return "Excelente";
        case nota === 9:
            return "Ótimo";
        case nota === 8:
            return "Bom";
        case nota === 7:
            return "Satisfatório";
        case nota === 6:
            return "Aceitável";
        case nota <= 5:
            return "Insuficiente";
        default:
            return "Nota inválida"; 
    }
}

console.log(classificarNota(8));  
console.log(classificarNota(4));  
console.log(classificarNota(6)); 