const nome = "Rebeca";

// Concatenação tradicional com o operador '+'
const concatenacao = "Olá " + nome + "!";
console.log(concatenacao); // 'Olá Rebeca!'

// Template literals (ou strings template) com interpolação de variáveis
const template = `
        Olá
        ${nome}!`;
console.log(template); // 'Olá\nRebeca!'

// Exemplos de expressões dentro de template literals
console.log(`1 + 1 = ${1 + 1}`); // '1 + 1 = 2'

// Usando uma função dentro de um template literal
const up = texto => texto.toUpperCase();
console.log(`Ei ... ${up("cuidado")}!`); // 'Ei ... CUIDADO!'