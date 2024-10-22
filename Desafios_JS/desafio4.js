function resultado (dividendo, divisor) {
    const Resultado = dividendo / divisor
    const resto = dividendo % divisor
    
    console.log(`O resultado é ${Resultado} e o resto é ${resto}`)
}

resultado(42, 4)