const pessoa = {
    saudacao: "Bom dia",
    // Método 'falar' que imprime a saudação do objeto 'pessoa'
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar() // Chama o método 'falar' diretamente no objeto 'pessoa' e imprime "Bom dia"

const falar = pessoa.falar
falar() // Conflito entre paradigmas: funcional e OO
// Aqui, o método 'falar' foi atribuído a uma variável e chamado fora do contexto do objeto 'pessoa'.
// 'this' no método 'falar' agora não aponta mais para 'pessoa', resultando em 'undefined'

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa() // Usa 'bind' para garantir que 'this' no método 'falar' sempre aponte para 'pessoa' e imprime "Bom dia"