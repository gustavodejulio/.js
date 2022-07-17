// Função sem retorno
// Função é um bloco de código nomeado que recebe parametros de entrada (existem funções anonimas)
function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2) //2 + undefined = NaN
imprimirSoma(2, 3, 4, 5, 6, 7) //ele ignora o restante
imprimirSoma()

//Função com retorno
function soma(a, b = 0){
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2))
console.log(soma())