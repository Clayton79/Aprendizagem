function resultado (valor1, valor2) {
    return {
        soma: valor1 + valor2,
        subtracao: valor1 - valor2 ,
        multiplicacao: valor1 / valor2 , 
        divisao: valor1 * valor2 ,
    }
}

console.log(resultado(2, 5))