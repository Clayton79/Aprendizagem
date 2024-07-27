const escola = "Cod3r";

console.log(escola.charAt(4));
console.log(escola.charAt(5));
console.log(escola.charCodeAt(3));
console.log(escola.indexOf('3'));

console.log(escola.substring(1)); // é um método que extrai uma parte específica de uma string.
console.log(escola.substring(0, 3)); // Você dá duas posições: o início e o fim.

console.log('Escola ' .concat(escola).concat("!"));
console.log('Escola ' + escola + "!"); // Segunda forma de concatenar.
console.log(escola.replace (3, 'e'));

console.log('Ana,Maria,Pedro' .split(','));