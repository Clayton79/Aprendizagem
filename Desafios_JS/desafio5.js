function money (dolar) {
    return `R$${dolar.toFixed(2).replace(".", ",")}`
}

console.log(money(0.30000000000000004))