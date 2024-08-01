const funcs = []; // Cria um array vazio chamado 'funcs'

for (let i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i); // Cada função armazenada imprime o valor de 'i'
    });
}

funcs[2](); // Chama a função armazenada no índice 2 do array 'funcs'
funcs[8](); // Chama a função armazenada no índice 8 do array 'funcs'