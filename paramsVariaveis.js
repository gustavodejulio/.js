function soma () {
    let soma = 0
    for (i in arguments) {
        soma += arguments[i]
    }
    return soma
}

console.log(soma(2))
console.log(soma(2, 3))
console.log(soma(2.1, 'teste'))
console.log(soma('teste', 'a', 'b'))