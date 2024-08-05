// Declaramos uma variável chamada `valor` e atribuimos a ela a string "Global"
const valor = "Global"

// Definimos uma função chamada `minhaFuncao`
// Esta função simplesmente imprime o valor da variável `valor` no console
function minhaFuncao() {
    console.log(valor)
}

// Definimos outra função chamada `exec`
function exec() {
    // Dentro desta função, declaramos outra variável chamada `valor` e atribuimos a ela a string "Local"
    // Note que esta variável `valor` está no escopo da função `exec`
    const valor = "Local"
    // Chamamos a função `minhaFuncao`
    minhaFuncao()
}

// Chamamos a função `exec` para executar o código dentro dela
exec()

// O que acontece aqui?
// Quando chamamos `exec()`, a variável `valor` com o valor "Local" é criada dentro do escopo da função `exec`.
// Depois, `minhaFuncao` é chamada. No entanto, `minhaFuncao` foi definida no escopo global, não dentro da função `exec`.
// Então, `minhaFuncao` acessa a variável `valor` que está no escopo global, que é "Global".
// Portanto, quando `minhaFuncao` é executada, ela imprime "Global" no console.