let valor // não inicializada
console.log(valor)

valor = null //ausencia de valor, sempre usar null quando você quiser zerar o valor de uma variavel
console.log(valor)
//console.log(valor.toString()) //Erro!

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined //evite atribuir undefined
console.log(!!produto.preco)
//delete produto.preco //se quiser retirar 
console.log(produto)

produto.preco = null //sem preço
console.log(!!produto.preco)
console.log(produt)