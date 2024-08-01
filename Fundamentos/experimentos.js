let a = 3; // Variável local ao módulo

// Adiciona uma propriedade global ao objeto global (no Node.js)
global.b = 123;

// Adiciona propriedades ao objeto global, que também pode ser acessado através de `this`
this.c = 456;
this.d = false;
this.e = "teste";

// Imprime o valor das variáveis e propriedades
console.log(a); // Esperado: 3 (variável local)

console.log(global.b); // Esperado: 123 (propriedade global adicionada)

console.log(this.c); // Esperado: 456 (propriedade global adicionada através de `this`)

console.log(module.exports.c); // Esperado: 456 (mesmo valor de `this.c`, pois `module.exports` é igual a `this` neste contexto)

console.log(module.exports === this); // Esperado: true (em módulos Node.js, `module.exports` e `this` referem-se ao mesmo objeto)

console.log(module.exports); // Esperado: { c: 456, d: false, e: 'teste' } (objeto exportado do módulo)

// Criando uma variável global sem declaração (não recomendado!)
abc = 3; // Adiciona `abc` ao objeto global (em ambientes Node.js, isso é `global.abc`)

console.log(global.abc); // Esperado: 3 (propriedade global criada sem `var`, `let`, ou `const`)

// Comentário sobre exportação do módulo
// module.exports = {e: 456, f: false, g: "teste"} 
