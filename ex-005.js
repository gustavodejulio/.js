function numero(a, b){
    let soma = a + b
    return `R$ ${soma.toFixed(2).replace('.', ',')}`
    
}
console.log(numero(0.1, 0.2))
