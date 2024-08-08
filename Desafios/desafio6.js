function JurosSimples (capitalinicial, taxadejuros,tempodeaplicacao) {
    const juros = capitalinicial * taxadejuros * tempodeaplicacao
    let montante = capitalinicial + juros 
    return montante
}

let capitalinicial = 3000
let taxadejuros = 0.3
let tempodeaplicacao = 7 

let montante = JurosSimples (capitalinicial, taxadejuros, tempodeaplicacao)
console.log(`O Montante é ${montante}`)

function JurosComposto (capitalinicial, taxadejuros,tempodeaplicacao) {
    let montantecomposto = capitalinicial * Math.pow((1 + taxadejuros), tempodeaplicacao)
    return montantecomposto
}

let montantecomposto = JurosComposto (capitalinicial, taxadejuros, tempodeaplicacao)
console.log(`O Montante é ${montantecomposto}`)