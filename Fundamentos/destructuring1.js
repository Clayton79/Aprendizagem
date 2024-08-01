// Cria um objeto chamado pessoa
const pessoa = {
    nome: "Ana",                    // Propriedade nome
    idade: 5,                       // Propriedade idade
    endereco: {                     // Propriedade endereco, que é um objeto
        logradouro: "Rua ABC",      // Propriedade logradouro
        numero: 1000,               // Propriedade numero
    }
}

// Desestrutura o objeto pessoa para obter as propriedades nome e idade
const { nome, idade } = pessoa;
console.log(nome, idade); // Esperado: Ana 5

// Desestrutura o objeto pessoa com renomeação das variáveis
const { nome: n, idade: i } = pessoa;
console.log(n, i); // Esperado: Ana 5

// Desestrutura o objeto pessoa para obter a propriedade sobrenome e uma propriedade com valor padrão bemHumorada
const { sobrenome, bemHumorada = true } = pessoa;
console.log(sobrenome, bemHumorada); // Esperado: undefined true (sobrenome não existe em pessoa, bemHumorada tem valor padrão true)

// Desestrutura a propriedade endereco do objeto pessoa para obter logradouro, numero e cep
const { endereco: { logradouro, numero, cep } } = pessoa;
console.log(logradouro, numero, cep); // Esperado: Rua ABC 1000 undefined (cep não existe em endereco)

// Tenta desestruturar a propriedade conta do objeto pessoa, que não existe
const { conta: { ag, num } } = pessoa;
console.log(ag, num); // Esperado: TypeError: Cannot destructure property 'ag' of 'undefined' as it is undefined