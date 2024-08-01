// Declara uma variável chamada saudacao com o valor "Opa"
// Esta variável está no contexto léxico 1, o nível mais externo
const saudacao = "Opa"; // contexto léxico 1

// Declara uma função chamada exec
function exec() {
    // Declara uma variável chamada saudacao com o valor "Falaaa"
    // Esta variável está no contexto léxico 2, que é um nível mais interno
    const saudacao = "Falaaa"; // contexto léxico 2
    // Retorna o valor da variável saudacao do contexto léxico 2
    return saudacao;
}

// Objetos são estruturas que agrupam pares nome/valor
const cliente = {
    nome: 'Pedro', // propriedade nome com o valor 'Pedro'
    idade: 32, // propriedade idade com o valor 32
    peso: 90, // propriedade peso com o valor 90
    endereco: { // propriedade endereco que é um objeto aninhado
        logradouro: 'Rua muito legal', // propriedade logradouro com o valor 'Rua muito legal'
        numero: 123 // propriedade numero com o valor 123
    }
};

// Exibe o valor da variável saudacao do contexto léxico 1
console.log(saudacao); // Exibe "Opa"

// Chama a função exec e exibe o valor retornado, que é a variável saudacao do contexto léxico 2
console.log(exec()); // Exibe "Falaaa"