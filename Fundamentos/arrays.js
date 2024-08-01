// Declara um array chamado valores com quatro números
const valores = [7.7, 8.9, 6.3, 9.2];

// Imprime o primeiro e o quarto elementos do array (índices 0 e 3)
console.log(valores[0], valores[3]); // Esperado: 7.7 9.2

// Tenta acessar o quinto elemento do array (índice 4), que não existe
console.log(valores[4]); // Esperado: undefined

// Define o valor do quinto elemento do array (índice 4) como 10
valores[4] = 10;
console.log(valores); // Esperado: [7.7, 8.9, 6.3, 9.2, 10]

// Imprime o número total de elementos no array
console.log(valores.length); // Esperado: 5

// Adiciona novos elementos ao final do array usando o método push
valores.push({ id: 3 }, false, null, 'teste');
console.log(valores); // Esperado: [7.7, 8.9, 6.3, 9.2, 10, { id: 3 }, false, null, 'teste']

// Remove e imprime o último elemento do array usando o método pop
console.log(valores.pop()); // Esperado: 'teste'

// Remove o elemento no índice 0 do array usando o operador delete
delete valores[0];
console.log(valores); // Esperado: [ <1 empty item>, 8.9, 6.3, 9.2, 10, { id: 3 }, false, null ]

// Imprime o tipo do array (será 'object' porque arrays são objetos em JavaScript)
console.log(typeof valores); // Esperado: 'object'