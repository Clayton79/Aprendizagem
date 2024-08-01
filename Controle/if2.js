// Declara a função teste1
function teste1(num) {
    // Verifica se o número é maior que 7
    if (num > 7)
        // Não imprime nada, pois console.log() está vazio
        console.log()

    // Este console.log está fora do bloco if e sempre será executado
    console.log("Final")
}

// Testa a função teste1 com o valor 6
teste1(6) // Esperado: "Final"
// Testa a função teste1 com o valor 8
teste1(8) // Esperado: "Final" (com uma linha em branco antes)


// Declara a função teste2
function teste2(num) {
    // Cuidado com o ponto e vírgula após o if, ele termina a instrução if
    if (num > 7); {
        // Este bloco será executado sempre, pois não está realmente controlado pelo if
        console.log(num)
    }
}

// Testa a função teste2 com o valor 6
teste2(6) // Esperado: 6
// Testa a função teste2 com o valor 8
teste2(8) // Esperado: 8