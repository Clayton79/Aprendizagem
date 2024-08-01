const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Primeiro Loop: Usa o 'for...in' para percorrer índices do array nums.
for (x in nums) {
    // Se o índice x for igual a 5, o loop é interrompido com 'break'.
    if (x == 5) {
        break
    }
    // Imprime o índice e o valor correspondente no array nums.
    console.log(`${x} = ${nums[x]}`)
}

// Segundo Loop: Também usa 'for...in', mas com o comando 'continue'.
for (y in nums) {
    // Se o índice y for igual a 5, pula para a próxima iteração sem executar o 'console.log'.
    if (y == 5) {
        continue
    }
    // Imprime o índice e o valor correspondente no array nums.
    console.log(`${y} = ${nums[y]}`)
}

// Terceiro Loop: Demonstrando o uso de rótulos para controle de fluxo em loops aninhados.
externo: // Rótulo para identificar o loop externo.
for (a in nums) {
    // Loop interno que também percorre os índices do array nums.
    for (b in nums) {
        // Se a for 2 e b for 3, o comando 'break externo' encerra o loop externo.
        if (a == 2 && b == 3) break externo
        // Imprime o par de índices (a, b) do loop interno.
        console.log(`Par = ${a},${b}`)
    }
}