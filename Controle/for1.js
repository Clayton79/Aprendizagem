// Inicializa a variável contador com o valor 1
let contador = 1;

// Loop while que continua enquanto o valor de contador for menor ou igual a 10
while (contador <= 10) {
    // Imprime o valor atual de contador
    console.log(`contador = ${contador}`);
    // Incrementa o valor de contador em 1 a cada iteração
    contador++;
}

// Loop for que vai de 1 até 10 (inclusive)
for (let i = 1; i <= 10; i++) {
    // Imprime o valor atual de i
    console.log(`i = ${i}`);
}

// Cria um array com cinco notas
const notas = [6.7, 7.4, 9.8, 8.1, 7.7];

// Loop for que itera sobre o array de notas
for (let i = 0; i < notas.length; i++) {
    // Imprime a nota atual do array usando o índice i
    console.log(`nota = ${notas[i]}`);
}