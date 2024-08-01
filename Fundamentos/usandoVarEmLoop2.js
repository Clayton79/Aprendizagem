const funcs = [];

// O loop 'for' itera de 0 a 9, e para cada iteração, uma função é adicionada ao array 'funcs'.
for (var i = 0; i < 10; i++) {
    // A função adicionada ao array 'funcs' apenas imprime o valor de 'i'.
    funcs.push(function() {
        console.log(i);  // Como 'var' tem escopo de função ou global, todas as funções no array 'funcs'
                         // compartilham a mesma variável 'i', que é visível fora do bloco do loop.
    });
}

// A chamada funcs[2]() imprime o valor de 'i' que é 10, pois o loop termina com 'i' igual a 10.
// O mesmo ocorre para funcs[8]().
funcs[2]()  // Imprime 10
funcs[8]()  // Imprime 10