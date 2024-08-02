function Pessoa() {
    this.idade = 0 // Inicializa a propriedade 'idade' com 0

    const self = this // Salva a referência do objeto atual ('Pessoa') em 'self'
    setInterval(function() {
        self.idade++ // Incrementa a propriedade 'idade' do objeto 'Pessoa'
        console.log(self.idade) // Imprime a propriedade 'idade'
    }, 1000) // A função será chamada a cada 1000ms (1 segundo)
}

new Pessoa // Cria uma nova instância de 'Pessoa' e inicia o intervalo