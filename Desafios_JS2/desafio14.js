const objetoParaArray = function(objeto) {
    const chaves = Object.keys(objeto);
    const resultado = chaves.map( chave => [chave, objeto[chave]]);
    return console.log(resultado);
}

objetoParaArray({
    nome: "Maria",
    profissao: "Desenvolvedora de software"
});

objetoParaArray({
    codigo: 11111,
    preco: 12000
});