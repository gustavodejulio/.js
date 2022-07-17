// O resultado sempre será VERDADEIRO ou FALSO
console.log('01)', '1' == 1) //valores iguais (iguais)
console.log('02)', '2' === 2) //valores e tipos iguais (estritamente iguais)
console.log('03)', '3' != 3) //valor diferente (diferente)
console.log('04)', '4' !== 4) //valor diferente e/ou tipo diferente (estritamente diferente)

console.log('05)', 3 < 2)
console.log('06)', 3 > 2)
console.log('07)', 3 <= 2)
console.log('08)', 3 >= 2)

const d1 = new Date(0)
const d2 = new Date(0)
//console.log(d1, d2)
console.log('09)', d1 === d2) // a comparação é com endereço de memória por ser uma variavel de referencia, então não tem diferença entre '===' e '=='
console.log('10)', d1 == d2)
console.log('11)', d1.getTime() === d2.getTime()) // retorna um 'number', também não tem diferença entre '===' e '=='

console.log('12)', undefined === null)
console.log('13)', undefined == null)