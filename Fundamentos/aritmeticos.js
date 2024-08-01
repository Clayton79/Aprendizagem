// Utiliza a destruturação de array para atribuir valores a variáveis
const [a, b, c, d] = [3, 5, 1, 15]

// Realiza várias operações matemáticas usando as variáveis
const soma = a + b + c + d             // Soma: 3 + 5 + 1 + 15 = 24
const subtracao = d - a                // Subtração: 15 - 3 = 12
const multiplicacao = a * b            // Multiplicação: 3 * 5 = 15
const divisao = d / a                  // Divisão: 15 / 3 = 5
const modulo = a % 2                   // Módulo: 3 % 2 = 1 (resto da divisão de 3 por 2)

// Imprime os resultados das operações
console.log(soma, subtracao, multiplicacao, -divisao, modulo) // Esperado: 24 12 15 -5 1