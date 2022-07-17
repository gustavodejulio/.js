const soma = function (a, b){
    return a + b
}

const imprimirResultado = function(c, d, operacao = soma){
    console.log(operacao(c, d))
}
imprimirResultado(2, 3)
imprimirResultado(2, 3, soma)
imprimirResultado(2, 3, function(u, o){
    return u - o
})
imprimirResultado(2, 3, (p, q) => p*q) // não tem como dar nome a função arrow (sempre anonima)

const pessoa = {
    falar: function(){ //na nova versão do JS é possivel substituir por apenas 'falar()'
        console.log('OPA!')
    }
}
pessoa.falar()