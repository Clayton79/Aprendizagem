let numero = 1; // Declara uma variável 'numero' com o valor 1 no escopo global

{
    let numero = 2; // Declara uma nova variável 'numero' com o valor 2, no escopo do bloco
    console.log('dentro = ', numero); // Exibe 'dentro = 2', pois está no escopo do bloco onde 'numero' foi redefinida
}

console.log('fora = ', numero); // Exibe 'fora = 1', pois aqui se refere à variável 'numero' do escopo global