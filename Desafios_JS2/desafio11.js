const receberPrimeiroEUltimoElemento = function (arraydoamor) {
    if (arraydoamor.length === 0) {
        return [];
    }  
    let primeiro = arraydoamor[0];
    let ultimo = arraydoamor[arraydoamor.length - 1];

    return [primeiro, ultimo];
}

let meuArray = ["xxt","reinan", "napoli", "clayton"];  
let resultado = receberPrimeiroEUltimoElemento(meuArray); 

console.log(receberPrimeiroEUltimoElemento([7, 14, "olá"]));  
console.log(receberPrimeiroEUltimoElemento([-100, "aplicativo", 16]));