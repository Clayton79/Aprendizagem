// Declara uma variável isAtivo com valor inicial false
let isAtivo = false;
console.log(isAtivo); // Esperado: false

// Altera o valor de isAtivo para true
isAtivo = true;
console.log(isAtivo); // Esperado: true

// Altera o valor de isAtivo para 1 (número)
isAtivo = 1;
console.log(!!isAtivo); // Esperado: true (porque 1 é considerado verdadeiro)

console.log("os verdadeiros... ");
// Exibe vários valores e verifica se são considerados verdadeiros
console.log(!!3);            // Esperado: true (números diferentes de 0 são verdadeiros)
console.log(!!-1);           // Esperado: true (números diferentes de 0 são verdadeiros)
console.log(' ');           // Imprime uma linha em branco
console.log(!!'texto');     // Esperado: true (strings não vazias são verdadeiras)
console.log(!![]);          // Esperado: true (arrays são verdadeiros, mesmo vazios)
console.log(!!{});          // Esperado: true (objetos são verdadeiros, mesmo vazios)
console.log(!!Infinity);    // Esperado: true (Infinity é considerado verdadeiro)
console.log(!!(isAtivo = true)); // Esperado: true (a atribuição de true a isAtivo é verdadeira)

console.log('os falsos...');
// Exibe vários valores e verifica se são considerados falsos
console.log(!!0);           // Esperado: false (0 é considerado falso)
console.log(!!'');          // Esperado: false (string vazia é considerada falsa)
console.log(!!null);        // Esperado: false (null é considerado falso)
console.log(NaN);           // Imprime NaN (não é convertido diretamente, pois é considerado falso)
console.log(!!undefined);   // Esperado: false (undefined é considerado falso)
console.log(!!(isAtivo = false)); // Esperado: false (a atribuição de false a isAtivo é falsa)

console.log('pra finalizar...');
// Verifica a primeira expressão verdadeira em uma série de valores
console.log(!!('' || null || 0 || ' ')); // Esperado: true (o primeiro valor verdadeiro é ' ')

let nome = 'Lucas';
// Usa o operador || para exibir 'nome' se não for falsy, se não exibe 'Desconhecido'
console.log(nome || 'Desconhecido'); // Esperado: 'Lucas' (porque 'Lucas' é um valor verdadeiro)