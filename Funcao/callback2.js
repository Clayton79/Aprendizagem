// Define um array com várias notas
const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0,]

// Sem callback
// Cria um array vazio para armazenar as notas baixas
const notasBaixas1 = []

// Itera sobre o array de notas usando um loop for...in
for (let i in notas) {
    // Verifica se a nota é menor que 7
    if (notas[i] < 7) {
        // Se for menor que 7, adiciona a nota ao array notasBaixas1
        notasBaixas1.push(notas[i])
    }
}

// Exibe as notas baixas encontradas com o loop for...in
console.log(notasBaixas1)

// Com callback
// Usa o método filter para criar um novo array com notas menores que 7
// O método filter aceita uma função callback que define a condição para filtragem
const notasBaixas2 = notas.filter(function (nota) {
    // A função callback retorna true para notas menores que 7, incluindo-as no novo array
    return nota < 7
})

// Exibe as notas baixas encontradas usando o método filter com função anônima
console.log(notasBaixas2)

// Cria uma função de seta (arrow function) que verifica se uma nota é menor que 7
const notasMenorQue7 = nota => nota < 7

// Usa o método filter com a função de seta para obter notas menores que 7
const notasBaixas3 = notas.filter(notasMenorQue7)

// Exibe as notas baixas encontradas usando o método filter com função de seta
console.log(notasBaixas3)