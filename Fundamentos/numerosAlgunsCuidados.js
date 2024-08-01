// Divisão de um número por zero
console.log(7 / 0); // Exibe 'Infinity', que é o resultado de uma divisão por zero em JavaScript

// Divisão de uma string numérica por um número
console.log("10" / 2); // Exibe 5, pois a string "10" é convertida em número antes da operação

// Concatenação de uma string com um número
console.log("3" + 2); // Exibe '32', pois a string "3" é concatenada com o número 2

// Subtração de uma string numérica por um número
console.log("3" - 2); // Exibe 1, pois a string "3" é convertida em número antes da operação

// Tentativa de multiplicar uma string não numérica por um número
console.log("Show!" * 2); // Exibe NaN (Not-a-Number), pois a string "Show!" não pode ser convertida em número

// Soma de números decimais imprecisos
console.log(0.1 + 0.7); // Exibe 0.7999999999999999 devido a imprecisões na representação de números de ponto flutuante em JavaScript

// Tentativa de chamar toString() diretamente em um número (sem parênteses)
//console.log(10.toString()); // Erro! Sintaxe inválida. O correto é usar parênteses ou envolver o número em parênteses

// Correção da chamada de toFixed(2) em um número com ponto flutuante
console.log((10.345).toFixed(2)); // Exibe '10.35', que é a representação da variável com duas casas decimais