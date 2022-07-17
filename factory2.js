function criarProduto(prod, prec){
    return {
        produto: prod,
        preco: prec
    }
}
console.log(criarProduto('Ameixa', 25))

// Método do vídeo
function criarProduto2(nome, preco){
    return {
        nome,
        preco,
        desconto: 0.1
    }
}
console.log(criarProduto2('Notebook', 3000))