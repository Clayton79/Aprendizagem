var numero = 1;  // Declara uma variável 'numero' com o valor 1 no escopo global ou de função.

{
    // Início de um bloco. A variável 'numero' é redeclarada aqui usando 'var'.
    // Com 'var', a declaração é feita no escopo mais externo (neste caso, global ou de função).
    var numero = 2;  // Redeclara a variável 'numero' e atribui o valor 2.

    console.log('dentro = ', numero);  // Imprime o valor da variável 'numero' dentro do bloco. Será 2.
}

console.log('fora = ', numero);  // Imprime o valor da variável 'numero' fora do bloco. Também será 2, porque 'var' tem escopo global ou de função.