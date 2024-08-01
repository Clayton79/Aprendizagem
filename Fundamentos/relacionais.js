// Comparações entre valores e tipos

//Sempre utilizar o === desse jeito e não desse jeito ==.

// Comparação usando '==', que compara apenas valores, permitindo conversão de tipo
console.log('01)', "1" == 1); // true, porque "1" é convertido para número 1

// Comparação usando '===', que compara valores e tipos, sem conversão de tipo
console.log('02)', "1" === 1); // false, porque "1" é uma string e 1 é um número

// Comparação usando '!=' para verificar desigualdade, permitindo conversão de tipo
console.log('03)', "3" != 3); // false, porque "3" é convertido para número 3

// Comparação usando '!==' para verificar desigualdade, sem conversão de tipo
console.log('04)', "3" !== 3); // true, porque "3" é uma string e 3 é um número

// Comparações numéricas

// Verifica se 3 é menor que 3
console.log('05)', 3 < 3); // false, porque 3 não é menor que 3

// Verifica se 3 é maior que 3
console.log('06)', 3 > 3); // false, porque 3 não é maior que 3

// Verifica se 3 é menor ou igual a 2
console.log('07)', 3 <= 2); // false, porque 3 não é menor ou igual a 2

// Verifica se 3 é maior ou igual a 3
console.log('08)', 3 >= 3); // true, porque 3 é igual a 3

// Comparações com objetos Date

// Cria duas instâncias de Date com o mesmo valor
const d1 = new Date(0);
const d2 = new Date(0);

// Verifica se d1 e d2 são o mesmo objeto
console.log('09)', d1 === d2); // false, porque são dois objetos diferentes

// Verifica se d1 e d2 são iguais considerando o valor (após conversão de tipo)
console.log('10)', d1 == d2); // false, porque são dois objetos diferentes

// Verifica se o tempo de d1 é igual ao tempo de d2
console.log('11)', d1.getTime() === d2.getTime()); // true, porque ambos representam o mesmo momento

// Comparações com undefined e null

// Verifica se undefined é igual a null (comparação de valores, permitindo conversão de tipo)
console.log('12)', undefined == null); // true, porque undefined e null são considerados iguais em comparação com '=='

// Verifica se undefined é estritamente igual a null (comparação de valores e tipos)
console.log('13)', undefined === null); // false, porque são de tipos diferentes