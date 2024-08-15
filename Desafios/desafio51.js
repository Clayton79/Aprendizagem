function  Calculadora (numero1, numero2, operacao) {
        switch (operacao) {
            case"soma":
            return numero1 + numero2
            case"subtracao":
            return numero1 - numero2
            case"multiplicacao":
            return numero1 * numero2
            case"divisao":
            return numero1 / numero2
            default:
                return "não é nada"
        }
}

console.log(Calculadora(10,20,"soma"))