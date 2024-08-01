// Estrategia 1 para gerar valor padrão
function soma1(a, b, c) {
    // Se 'a', 'b' ou 'c' forem falsy (0, null, undefined, etc.), atribua o valor 1
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}

console.log(soma1(), soma1(3), soma1(1, 2, 3), soma1(0,0,0))

// Estrategia 2, 3 e 4 para gerar valor padrão
function soma2(a, b, c) {
    // Estratégia 2: Verifica se 'a' não é undefined
    a = a !== undefined ? a : 1
    // Estratégia 3: Verifica se o segundo argumento (índice 1) está presente
    b = 1 in arguments ? b : 1
    // Estratégia 4: Verifica se 'c' é NaN (Not a Number)
    c = isNaN(c) ? 1 : c
    return a + b + c
}

console.log(soma2(), soma2(3), soma2(1,2,3), soma2(0,0,0))

// Valor padrão do ES2015
function soma3(a = 1, b = 1, c = 1) {
    // Utiliza a sintaxe de valores padrão do ES2015
    return a + b + c
}

console.log(soma3(), soma3(3), soma3(1,2,3), soma3(0,0,0))