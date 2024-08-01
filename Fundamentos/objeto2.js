// Mostra o tipo da função Object, que é uma função construtora nativa em JavaScript.
console.log(typeof Object); // Exibe 'function'

// Cria um novo objeto usando a função construtora Object e mostra seu tipo.
console.log(typeof new Object()); // Exibe 'object'

// Declara uma função chamada Cliente, que pode ser usada como um construtor.
const Cliente = function () {};
// Mostra o tipo da função Cliente, que é uma função.
console.log(typeof Cliente); // Exibe 'function'

// Cria um novo objeto usando a função construtora Cliente e mostra seu tipo.
console.log(typeof new Cliente()); // Exibe 'object'

// Declara uma classe chamada Produto usando a sintaxe de classes introduzida no ES2015 (ES6).
class Produto {}
// Mostra o tipo da classe Produto, que é uma função.
console.log(typeof Produto); // Exibe 'function'

// Cria uma nova instância da classe Produto e mostra seu tipo.
console.log(typeof new Produto()); // Exibe 'object'