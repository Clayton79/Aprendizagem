// Função que imprime a soma dos parâmetros a e b
function imprimirSoma(a, b) {
    console.log(a + b);
}

// Chamada da função com dois argumentos
imprimirSoma(2, 3); // Esperado: 5 (2 + 3)

// Chamada da função com um argumento, o segundo argumento é `undefined`
imprimirSoma(2); // Esperado: NaN (2 + undefined, pois `b` é `undefined` e não pode ser somado)

 // Chamada da função com mais de dois argumentos, apenas os primeiros dois são considerados
imprimirSoma(2, 10, 4, 5, 6, 7, 8); // Esperado: 12 (2 + 10, os outros argumentos são ignorados)

// Chamada da função sem argumentos, ambos `a` e `b` são `undefined`
imprimirSoma(); // Esperado: NaN (undefined + undefined, pois ambos os parâmetros são `undefined`)