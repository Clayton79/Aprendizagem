// Função construtora Carro que recebe parâmetros para velocidade máxima e delta (incremento de velocidade)
function Carro(velocidadeMaxima = 200, delta = 5) {
    // Atributo privado
    // velocidadeAtual é uma variável privada, acessível apenas dentro da função construtora
    let velocidadeAtual = 0

    // Método público
    // Define o método acelerar como uma propriedade pública do objeto criado pela função construtora
    this.acelerar = function () {
        // Verifica se a velocidade atual mais o delta não excede a velocidade máxima
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            // Se não exceder, incrementa a velocidade atual pelo valor de delta
            velocidadeAtual += delta
        } else {
            // Se exceder, define a velocidade atual para a velocidade máxima
            velocidadeAtual = velocidadeMaxima
        }
    }

    // Método público
    // Define o método getVelocidadeAtual como uma propriedade pública do objeto criado pela função construtora
    this.getVelocidadeAtual = function () {
        // Retorna o valor da variável privada velocidadeAtual
        return velocidadeAtual
    }
}

// Cria uma instância do Carro com valores padrão (velocidade máxima de 200 e delta de 5)
const uno = new Carro()
uno.acelerar() // Chama o método acelerar, aumentando a velocidade em 5
console.log(uno.getVelocidadeAtual()) // Exibe a velocidade atual do carro uno, que deve ser 5

// Cria uma instância do Carro com uma velocidade máxima de 350 e um delta de 20
const ferrari = new Carro(350, 20)
ferrari.acelerar() // Chama o método acelerar, aumentando a velocidade em 20
ferrari.acelerar() // Chama o método acelerar novamente, aumentando a velocidade em mais 20 (total de 40)
ferrari.acelerar() // Chama o método acelerar novamente, aumentando a velocidade em mais 20 (total de 60)
console.log(ferrari.getVelocidadeAtual()) // Exibe a velocidade atual do carro ferrari, que deve ser 60

// Verifica o tipo de Carro
console.log(typeof Carro) // Exibe 'function' porque Carro é uma função construtora

// Verifica o tipo de ferrari
console.log(typeof ferrari) // Exibe 'object' porque ferrari é uma instância de Carro