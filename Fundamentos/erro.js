function tratarErroELancar (erro) {
    // throw new error ("...")
    // throw 10
    // throw true
    // throw "mensagem"
    throw { 
        nome:erro.name,
        msg: erro.message,
        date: new Date
    }
}

// Função que imprime o nome do objeto em letras maiúsculas, seguido de "!!!"
function imprimirSomaGritado(obj) {
    try {
        // Tenta acessar a propriedade 'name' do objeto e a transforma em maiúsculas, adicionando "!!!"
        console.log(obj.name.toUpperCase() + "!!!");
    } catch (e) {
        // Se ocorrer um erro, chama a função tratarErroELancar passando o erro
        tratarErroELancar(e);
    } finally {
        // Este bloco sempre é executado, independentemente de ocorrer um erro ou não
        console.log("final");
    }
}

// Função fictícia para tratar e lançar o erro
function tratarErroELancar(e) {
    console.log("Ocorreu um erro:", e.message);
}

// Objeto com a propriedade 'nome' (não é 'name')
const obj = { nome: "Roberto" };

// Chama a função passando o objeto
imprimirSomaGritado(obj); // Esperado: erro porque a propriedade 'name' não existe no objeto