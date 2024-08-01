const escola = "Cod3r";

// Extrai o caractere na posição 4 (contagem começa em 0)
console.log(escola.charAt(4)); // 'r'

// Tenta extrair o caractere na posição 5, mas não existe, então retorna uma string vazia
console.log(escola.charAt(5)); // ''

// Retorna o código Unicode do caractere na posição 3
console.log(escola.charCodeAt(3)); // 51 (código Unicode para '3')

// Retorna o índice da primeira ocorrência do caractere '3'
console.log(escola.indexOf('3')); // 3

// Extrai a substring a partir da posição 1 até o final da string
console.log(escola.substring(1)); // 'od3r'

// Extrai a substring da posição 0 até a posição 3 (não inclui a posição 3)
console.log(escola.substring(0, 3)); // 'Cod'

// Concatena a string 'Escola ' com o valor da variável escola e adiciona um '!'
// Utiliza o método concat
console.log('Escola '.concat(escola).concat("!")); // 'Escola Cod3r!'

// Concatena a string 'Escola ' com o valor da variável escola e adiciona um '!'
// Utiliza o operador '+'
console.log('Escola ' + escola + "!"); // 'Escola Cod3r!'

// Substitui o primeiro caractere '3' por 'e'
// O método replace só substitui a primeira ocorrência
console.log(escola.replace(3, 'e')); // 'Code'

const nomes = 'Ana,Maria,Pedro';

// Divide a string em um array, usando a vírgula como delimitador
console.log(nomes.split(',')); // ['Ana', 'Maria', 'Pedro']