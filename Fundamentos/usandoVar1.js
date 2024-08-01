{
    {
        {
            {
                // Declarando uma variável com 'var'. 
                // 'var' tem escopo global ou de função, não de bloco.
                var sera = 'Será???';

                // Aqui, o código está tentando redefinir o método 'console.log'
                // mas na verdade está apenas atribuindo o valor de 'sera' à 'console.log'.
                console.log = (sera);
            }
        }
    }
}

// Aqui, 'sera' está acessível globalmente porque foi declarada com 'var'.
// O valor impresso será 'Será???', que foi definido acima.
console.log(sera);

function teste() {
    // Dentro da função 'teste', a variável 'local' é declarada com 'var',
    // que tem escopo de função. Isso significa que 'local' só pode ser acessada dentro da função.
    var local = 123;
}

// A função 'teste' é chamada, mas não faz nada visível no console
// e a variável 'local' não é acessível fora da função.
teste();

// Tentar acessar 'local' fora da função resulta em um erro,
// porque 'local' não está definida no escopo global.
// Isso causará um ReferenceError.
console.log(local);