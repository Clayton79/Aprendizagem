// Declara uma variável 'a' com valor 7 e uma variável 'b' com valor 3
const a = 7;
let b = 3;

// Operador de atribuição com adição
b += a; // Equivalente a: b = b + a; Agora b = 3 + 7 = 10
console.log(b); // Esperado: 10

// Operador de atribuição com subtração
b -= 4; // Equivalente a: b = b - 4; Agora b = 10 - 4 = 6
console.log(b); // Esperado: 6

// Operador de atribuição com multiplicação
b *= 2; // Equivalente a: b = b * 2; Agora b = 6 * 2 = 12
console.log(b); // Esperado: 12

// Operador de atribuição com divisão (está faltando o divisor)
b /= 2; // Equivalente a: b = b / 2; Agora b = 12 / 2 = 6
console.log(b); // Esperado: 6

// Operador de atribuição com módulo (resto da divisão)
b %= 2; // Equivalente a: b = b % 2; Agora b = 6 % 2 = 0 (porque 6 dividido por 2 tem resto 0)
console.log(b); // Esperado: 0