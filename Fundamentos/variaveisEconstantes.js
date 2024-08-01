var a = 3; // Declaração da variável 'a' usando 'var'. Inicialmente, 'a' é 3.
let b = 4; // Declaração da variável 'b' usando 'let'. Inicialmente, 'b' é 4.

var a = 30; // A variável 'a' é redeclarada e seu valor é alterado para 30. Isso é permitido com 'var'.
b = 40;     // A variável 'b' é atualizada para 40. Isso é permitido com 'let' e 'var'.

console.log(a, b); // Imprime 30 e 40, que são os valores atuais de 'a' e 'b'.

a = 300;  // A variável 'a' é atualizada para 300.
b = 400;  // A variável 'b' é atualizada para 400.

console.log(a, b); // Imprime 300 e 400, que são os valores atuais de 'a' e 'b'.

const c = 5; // Declaração da variável 'c' usando 'const'. Inicialmente, 'c' é 5. Variáveis declaradas com 'const' são imutáveis após a inicialização.

c = 50; // Tentar atualizar o valor de 'c' resulta em erro. Variáveis declaradas com 'const' não podem ser reassigned.

console.log(c); // Não será executado devido ao erro anterior. Se não houvesse o erro, imprimira 5, que é o valor inicial de 'c'.