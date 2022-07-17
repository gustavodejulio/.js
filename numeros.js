const peso1 = 1.0
const peso2 = Number('2.1')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1)) //é inteiro mesmo com o ponto, caso seja 1.1 é float
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871    
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1+peso2)

console.log(media.toFixed(2)) //toFixed() determina o número de casas decimais (não altera o número)
console.log(media.toString()) //transforma o valor em uma string (colocar o 2 no parenteses converte em binário)
console.log(typeof media)
console.log(typeof Number)