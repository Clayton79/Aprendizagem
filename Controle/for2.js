// Cria um array com notas
const notas = [6.7, 7.4, 9.8, 8.1, 7.7];

// Loop for..in para iterar sobre os índices do array
for (i in notas) {
    // Imprime o índice e o valor da nota correspondente
    console.log(i, notas[i]);
}

// Cria um objeto com informações sobre uma pessoa
const pessoa = {
    nome: "Ana",
    sobrenome: "Silva",
    idade: 29,
    peso: 64
};

// Loop for..in para iterar sobre as propriedades do objeto
for (atributo in pessoa) {
    // Imprime o nome do atributo e o valor correspondente no objeto
    console.log(`${atributo} = ${pessoa[atributo]}`);
}