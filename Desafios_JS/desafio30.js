const pessoa = {
    nome: 'Maria',
    idade: 25,
    dizerOla: function() {
        console.log(`Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`);
    }
};

pessoa.dizerOla(); // Chama a função dizendo olá
