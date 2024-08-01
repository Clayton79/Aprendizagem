// Função rand que recebe um objeto como parâmetro e usa desestruturação para extrair min e max
function rand({ min = 0, max = 1000 } = {}) {
    // Gera um valor aleatório entre min e max
    const valor = Math.random() * (max - min) + min;
    // Retorna o valor arredondado para baixo
    return Math.floor(valor);
}

// Objeto com valores para min e max
const obj = { max: 50, min: 40 };

// Chama a função rand passando o objeto obj
console.log(rand(obj)); // Esperado: um número aleatório entre 40 e 50

// Chama a função rand passando um objeto com apenas min definido
console.log(rand({ min: 955 })); // Esperado: um número aleatório entre 955 e 1000 (max padrão é 1000)

// Chama a função rand passando um objeto vazio
console.log(rand({})); // Esperado: um número aleatório entre 0 e 1000 (min e max padrão são usados)

// Chama a função rand sem argumentos
console.log(rand()); // Esperado: um número aleatório entre 0 e 1000 (min e max padrão são usados)