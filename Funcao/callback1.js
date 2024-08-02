// Define um array de strings chamado fabricantes com três elementos
const fabricantes = ["Mercedes", "Audi", "BMW"];

// Define uma função chamada imprimir que recebe dois parâmetros: nome e indice
// A função imprime no console o índice (começando de 1) e o nome do fabricante
function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`); // Usa template literals para formatar a saída
}

// Chama o método forEach no array fabricantes, passando a função imprimir
// Isso vai iterar sobre cada elemento do array e chamar a função imprimir
// com o nome do fabricante e o índice correspondente
fabricantes.forEach(imprimir);

// Chama o método forEach no array fabricantes novamente
// Desta vez, uma função de seta é passada diretamente para forEach
// Essa função imprime apenas o nome do fabricante no console
fabricantes.forEach(fabricantes => console.log(fabricantes));