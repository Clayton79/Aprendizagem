// Definindo uma função que retorna um número inteiro aleatório entre min e max
function getInteiroAleatorioEntre(min, max) {
    // Gera um número decimal aleatório entre min (inclusivo) e max (exclusivo)
    const valor = Math.random() * (max - min) + min
    // Arredonda o número para baixo, para o inteiro mais próximo
    return Math.floor(valor)
}

// Declara a variável opcao e inicializa com 0
let opcao = 0

// Enquanto a opcao não for igual a -1, o laço continua executando
while (opcao != -1) {
    // Chama a função getInteiroAleatorioEntre com valores -1 e 10, e armazena o resultado em opcao
    opcao = getInteiroAleatorioEntre(-1, 10)
    // Imprime a opção escolhida no console
    console.log(`Opção escolhida foi ${opcao}.`)
}

// Quando o laço while termina (quando opcao é igual a -1), imprime a mensagem de despedida no console
console.log("Até a próxima!")
