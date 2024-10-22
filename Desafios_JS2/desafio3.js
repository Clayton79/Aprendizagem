function calcularSalarioLiquido(horasTrabalhadas, ganhoPorHora) {
    const salarioBruto = horasTrabalhadas * ganhoPorHora;
    const salarioLiquido = salarioBruto - salarioBruto * 30/100;

    return console.log(`Salário igual a R$ ${salarioLiquido}`);
    }
calcularSalarioLiquido(180, 60);