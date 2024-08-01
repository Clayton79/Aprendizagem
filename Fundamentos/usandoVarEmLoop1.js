for (var i = 0; i < 10; i++) {
    // O loop 'for' itera de 0 a 9, incrementando o valor de 'i' a cada iteração.
    console.log(i);  // Imprime o valor atual de 'i' a cada iteração do loop.
}

// Após o término do loop, 'i' ainda está acessível aqui porque 'var' tem escopo global ou de função.
console.log('i =', i);  // Imprime o valor final de 'i', que é 10, após o loop ter terminado.