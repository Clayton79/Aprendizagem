// Exemplo de callback no browser
// Obtém o primeiro elemento <body> no documento HTML
document.getElementsByTagName("body")[0].onclick = function (e) {
    // Quando o evento de clique ocorre no elemento <body>, esta função callback é executada
    console.log("O evento ocorreu!")
}