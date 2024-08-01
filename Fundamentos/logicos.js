function compras(trabalho1, trabalho2) {
    // Se pelo menos um dos trabalhos é verdadeiro, comprar sorvete
    const comprarSorvete = trabalho1 || trabalho2;
    
    // Se ambos os trabalhos são verdadeiros, comprar uma TV de 50"
    const comprarTv50 = trabalho1 && trabalho2;
    
    // Se apenas um dos trabalhos é verdadeiro (ou seja, um é verdadeiro e o outro é falso)
    // const comprarTv32 = !!(trabalho1 ^ trabalho2) // Alternativa usando XOR bitwise
    const comprarTv32 = trabalho1 != trabalho2; // Também verifica se apenas um é verdadeiro
    
    // Se não for comprar sorvete, manter saudável
    const manterSaudavel = !comprarSorvete;

    // Retorna um objeto com as decisões de compra
    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel };
}

console.log(compras(true, true));   // { comprarSorvete: true, comprarTv50: true, comprarTv32: false, manterSaudavel: false }
console.log(compras(true, false));  // { comprarSorvete: true, comprarTv50: false, comprarTv32: true, manterSaudavel: false }
console.log(compras(false, true));  // { comprarSorvete: true, comprarTv50: false, comprarTv32: true, manterSaudavel: false }
console.log(compras(false, false)); // { comprarSorvete: false, comprarTv50: false, comprarTv32: false, manterSaudavel: true }