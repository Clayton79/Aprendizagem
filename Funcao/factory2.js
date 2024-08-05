// Define a função `criarProduto` que recebe dois parâmetros: `nome` e `preco`.
function criarProduto(nome, preco) {
    // A função retorna um objeto com três propriedades:
    return {
        // `nome`: A chave `nome` é atribuída ao valor passado como argumento para a função.
        nome,
        // `preco`: A chave `preco` é atribuída ao valor passado como argumento para a função.
        preco,
        // `desconto`: A chave `desconto` é uma constante com o valor 0.1 (ou 10%).
        desconto: 0.1
    }
}

// Chama a função `criarProduto` com os argumentos "Notebook" e 2199.49
// O resultado é um objeto com as propriedades `nome`, `preco`, e `desconto`
// O objeto resultante é:
// { nome: 'Notebook', preco: 2199.49, desconto: 0.1 }
console.log(criarProduto("Notebook", 2199.49))

// Chama a função `criarProduto` com os argumentos "iPad" e 1199.49
// O resultado é um objeto com as propriedades `nome`, `preco`, e `desconto`
// O objeto resultante é:
// { nome: 'iPad', preco: 1199.49, desconto: 0.1 }
console.log(criarProduto("iPad", 1199.49))