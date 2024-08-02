let comparaComThis = function (param) {
    // Cria uma função chamada "comparaComThis" que recebe um parâmetro "param"
    // A função verifica se "this" é igual ao "param" e imprime o resultado (true ou false)
    console.log(this === param)
}

comparaComThis(global)
// Chama a função "comparaComThis" passando "global" como argumento
// No contexto global do Node.js, "this" é o objeto global
// Deve imprimir "true" porque "this" é igual ao objeto global

const obj = {}
comparaComThis = comparaComThis.bind(obj)
// Usa "bind" para criar uma nova versão da função "comparaComThis" onde "this" é sempre o objeto "obj"
// Agora, "this" dentro da função sempre será "obj"

comparaComThis(global)
// Chama a função "comparaComThis" com "global" como argumento
// Agora, "this" é "obj", não o objeto global, então deve imprimir "false"

comparaComThis(obj)
// Chama a função "comparaComThis" com "obj" como argumento
// Deve imprimir "true" porque "this" é "obj" e "param" também é "obj"

let comparaComThisArrow = param => console.log(this === param)
// Cria uma função de seta (arrow function) chamada "comparaComThisArrow"
// As arrow functions não têm seu próprio "this", elas herdam "this" do contexto onde foram criadas
// A função imprime se "this" é igual ao "param"

comparaComThisArrow(global)
// Chama a função "comparaComThisArrow" com "global" como argumento
// Como as arrow functions herdam "this" do contexto onde foram criadas, "this" não será o objeto global
// Deve imprimir "false"

comparaComThisArrow(module.exports)
// Chama a função "comparaComThisArrow" com "module.exports" como argumento
// No Node.js, fora de uma função, "this" é "module.exports"
// Deve imprimir "true" porque "this" é igual a "module.exports"

comparaComThisArrow = comparaComThisArrow.bind(obj)
// Tenta usar "bind" para mudar "this" da função "comparaComThisArrow" para "obj"
// Mas o "bind" não funciona com arrow functions, então "this" não mudará

comparaComThisArrow(obj)
// Chama a função "comparaComThisArrow" com "obj" como argumento
// Deve imprimir "false" porque "this" ainda é "module.exports", não "obj"