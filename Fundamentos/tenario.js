// Função que utiliza o operador ternário para determinar se a nota é suficiente para aprovação
const resultado = nota => nota >= 7 ? "Aprovado" : "Reprovado";

// Testa a função com diferentes notas
console.log(resultado(7.1)); // 'Aprovado' - nota maior ou igual a 7
console.log(resultado(6.7)); // 'Reprovado' - nota menor que 7