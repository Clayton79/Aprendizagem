function Pessoa() {
    this.idade = 0; // Inicializa a propriedade idade com 0

    setInterval(() => {
        this.idade++; // Incrementa a idade a cada segundo
        console.log(this.idade); // Imprime a idade atual no console
    }, 1000); // A função dentro de setInterval é executada a cada 1000 milissegundos (1 segundo)
}

new Pessoa(); // Cria uma nova instância da função Pessoa