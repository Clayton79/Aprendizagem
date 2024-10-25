const receberSomenteParesDeIndicesPares = function (numeros) {
    return console.log(numeros.filter((numero, indice) => {
        const numeroPar = numero % 2 === 0;
        const indicePar = indice % 2 === 0;
        return numeroPar && indicePar
    }));
}


receberSomenteParesDeIndicesPares([1, 2, 3, 4]);
receberSomenteParesDeIndicesPares([10, 70, 22, 43]);