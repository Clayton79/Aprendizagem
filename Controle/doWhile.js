// Função que gera um número inteiro aleatório entre `min` (inclusive) e `max` (exclusive).
function getInteiroAleatorio(min, max) {
    const valor = Math.random() * (max - min) + min; // Gera um número aleatório no intervalo [min, max).
    return Math.floor(valor); // Arredonda o número para baixo, obtendo um número inteiro.
}

let opcao = -1; // Inicializa a variável `opcao` com o valor -1.

do {
    opcao = getInteiroAleatorio(-1, 10); // Gera um novo número aleatório entre -1 e 10 e atribui a `opcao`.
    console.log(`Opção escolhida foi ${opcao}`); // Exibe o valor atual de `opcao` no console.
} while (opcao != -1); // Continua o loop até que `opcao` seja igual a -1.

console.log("Até a próxima!"); // Exibe a mensagem "Até a próxima!" quando o loop termina.