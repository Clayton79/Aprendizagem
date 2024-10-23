const inverso = function (verdade) {
    if (typeof verdade === "boolean" && verdade == true) {
        verdade = false;
    } else if (typeof verdade === "boolean" && verdade == false) {
        verdade = true;
    } else if (typeof verdade === "number" && verdade > 0) {
        verdade = verdade * -1;  
    } else if (typeof verdade === "number" && verdade < 0) {
        verdade = verdade * -1;
    } else {
        verdade = `booleano ou numero esperados, mas o parâmetro é do tipo ${typeof verdade}.`;
    }
    console.log(verdade);
}

inverso(true);
inverso("6");
inverso(-2000);
inverso("programação");