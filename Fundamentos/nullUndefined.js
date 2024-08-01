// Declara uma variável sem inicializar
let valor;
console.log(valor); // Exibe 'undefined', pois a variável foi declarada, mas não foi inicializada

// Atribui 'null' à variável, indicando ausência de valor
valor = null;
console.log(valor); // Exibe 'null', que é usado para indicar que a variável não possui um valor

// Tentativa de chamar um método em 'null', que resultaria em erro se descomentado
// console.log(valor.toString()); // Erro! 'null' não tem método toString

// Cria um objeto vazio
const produto = {};
console.log(produto.preco); // Exibe 'undefined', pois 'preco' ainda não foi definido no objeto
console.log(produto); // Exibe o objeto vazio '{}'

// Atribui um valor à propriedade 'preco' do objeto
produto.preco = 3.50;
console.log(produto); // Exibe o objeto com a propriedade 'preco' definida: '{ preco: 3.5 }'

// Atribui 'undefined' à propriedade 'preco', o que efetivamente remove o valor da propriedade
produto.preco = undefined; // Evite atribuir 'undefined' diretamente a propriedades
console.log(!!produto.preco); // Exibe 'false', pois 'undefined' é falsy
// delete produto.preco; // Opcional: remove a propriedade 'preco' do objeto
console.log(produto); // Exibe o objeto sem a propriedade 'preco', se 'delete' for usado

// Atribui 'null' à propriedade 'preco', indicando que a propriedade existe, mas não tem valor
produto.preco = null; // Sem preço
console.log(!!produto.preco); // Exibe 'false', pois 'null' é falsy
console.log(produto); // Exibe o objeto com 'preco' definido como 'null': '{ preco: null }'