/* 
O operador de exponenciação `**` é uma forma mais recente (ES7) de calcular a base elevada ao expoente.
A expressão `5 ** 3` calcula 5 elevado à potência de 3.
*/

const exp = 5 ** 3; // 5 elevado a 3, que é 125
console.log(exp); // Exibe 125

let base = 7;
base **= 3; // O operador `**=` eleva o valor armazenado em `base` à terceira potência, equivalente a base = base ** 3
console.log(base); // Exibe 343, que é 7 elevado a 3

const xp = 2 ** -3; // O expoente negativo significa que estamos calculando 2 elevado a -3, o que é equivalente a 1/(2**3)
console.log(xp); // Exibe 0.125, que é 1 dividido por 8

// Calcula a área de um círculo usando a fórmula: área = π * raio²
const raio = 5.6;
const area = Math.PI * Math.pow(raio, 2); // Math.pow calcula raio ao quadrado (raio ** 2)
console.log(area); // Exibe a área calculada do círculo
console.log(typeof Math); // Exibe "object" porque Math é um objeto incorporado no JavaScript
