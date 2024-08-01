let num1 = 1; // Inicializa 'num1' com o valor 1
let num2 = 2; // Inicializa 'num2' com o valor 2

num1++; // Incrementa 'num1' em 1. Agora 'num1' é 2
console.log(num1); // Exibe 2

--num1; // Decrementa 'num1' em 1 antes de usá-lo. Agora 'num1' é 1
console.log(num1); // Exibe 1

// Compara o resultado de (++num1 === num2--) e depois exibe o resultado
console.log(++num1 === num2--); // ++num1 incrementa 'num1' para 2 antes da comparação, 'num2--' compara 'num2' (que é 2) e depois decrementa para 1. Portanto, 2 === 2 é verdadeiro.
console.log(num1 === num2); // Após a comparação anterior, 'num1' é 2 e 'num2' é 1. Portanto, 2 === 1 é falso.