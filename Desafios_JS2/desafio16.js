const checarAnosBissexto = function(ano) {
        return console.log((ano % 4 === 0 && (ano % 100 !== 0 || ano % 400 === 0)));
}

checarAnosBissexto(2020);
checarAnosBissexto(2100);