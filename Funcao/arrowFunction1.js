let dobro = function (a) {
    // Criamos uma função chamada "dobro" usando a sintaxe tradicional de função
    // Ela recebe um parâmetro "a"
    // A função retorna o valor de 2 vezes "a"
    return 2 * a
}

dobro = (a) => {
    // Aqui, reatribuímos "dobro" para uma nova função usando uma arrow function
    // A função ainda recebe um parâmetro "a"
    // E ainda retorna o valor de 2 vezes "a"
    return 2 * a
}

dobro = a => 2 * a 
// Outra reatribuição de "dobro" usando uma arrow function mais curta
// Quando há apenas um parâmetro, não precisamos dos parênteses ao redor de "a"
// Quando a função tem apenas uma linha que retorna algo, o "return" é implícito, então não precisamos escrevê-lo

console.log(dobro(Math.PI)) 
// Aqui estamos chamando a função "dobro" com o valor de Math.PI (aproximadamente 3.14)
// E imprimindo o resultado no console

let ola = function () {
    // Criamos uma função chamada "ola" usando a sintaxe tradicional de função
    // A função não tem parâmetros
    // A função retorna a string "Olá"
    return "Olá"
}

ola = () => "Olá"
// Reatribuímos "ola" para uma nova função usando uma arrow function
// A função não tem parâmetros, então usamos parênteses vazios
// A função retorna a string "Olá"

ola = _ => "Olá" 
// Reatribuímos "ola" novamente usando uma arrow function
// A função tem um parâmetro (usamos "_" quando não precisamos do valor do parâmetro)
// A função retorna a string "Olá"

console.log(ola())
// Aqui estamos chamando a função "ola" e imprimindo o resultado no console
