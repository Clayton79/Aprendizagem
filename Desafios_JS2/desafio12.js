const removerPropriedade = function(objeto, nomeDaPropriedade) {
    const copia = Object.assign({}, objeto);
    delete copia[nomeDaPropriedade];
    return console.log(copia);
}

removerPropriedade();