/*O método Math.pow calcula a base elevada ao expoente.
    novo método para calcular base elevada ao expoente.
                (ES7) const exp = 5**3
*/

const exp = 5**3 //O primeiro valor representa a base.
console.log(exp)

let base = 7
base **= 3 // Eleva o valor armazenado  na base à terceira potência.
console.log(base)

const xp = 2** -3 // Com expoente negativo.
console.log(xp)

const raio = 5.6;
const area = Math.PI * Math.pow (raio, 2);

console.log(area);
console.log(typeof Math); 