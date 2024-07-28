const valores = [7.7, 8.9, 6.3, 9.2]; // começa a contar com zero e não com um. 
console.log(valores[0], valores [3]);
console.log(valores[4]);

valores [4] = 10;
console.log(valores);
console.log(valores.length); // Retorna o número total de elementos na array que no caso é 5.

valores.push({id: 3}, false, null, 'teste');
console.log(valores);

console.log(valores.pop());
delete valores [0]
console.log(typeof valores);