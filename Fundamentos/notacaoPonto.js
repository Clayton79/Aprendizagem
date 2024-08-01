// Math.ceil arredonda um número para cima, para o inteiro mais próximo.
console.log(Math.ceil(6.1)); // Exibe 7, pois 6.1 é arredondado para o próximo inteiro mais alto.

// Criando um objeto vazio
const obj1 = {};
// Adicionando uma propriedade 'nome' ao objeto e atribuindo o valor 'Bola'
obj1.nome = "Bola";
// Alternativamente, a mesma atribuição pode ser feita usando a notação de colchetes
// obj1["nome"] = "Bola2"
console.log(obj1.nome); // Exibe 'Bola', o valor da propriedade 'nome' do objeto obj1

// Função construtora para criar objetos com nome e um método exec
function Obj(nome) {
    this.nome = nome; // Atribui o valor do parâmetro 'nome' à propriedade 'nome' do objeto
    this.exec = function() { // Adiciona um método 'exec' ao objeto
        console.log("Exec...");
    }
}

// Criando dois novos objetos usando a função construtora Obj
const obj2 = new Obj("Cadeira"); // Cria um objeto com nome 'Cadeira'
const obj3 = new Obj("Mesa");    // Cria um objeto com nome 'Mesa'

// Exibindo os valores das propriedades 'nome' de obj2 e obj3
console.log(obj2.nome); // Exibe 'Cadeira'
console.log(obj3.nome); // Exibe 'Mesa'

// Chamando o método 'exec' do objeto obj3
obj3.exec(); // Exibe 'Exec...' porque o método 'exec' foi definido na função construtora