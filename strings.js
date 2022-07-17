const escola = 'Cod3r'
const numero = '0123456789'
console.log(escola.charAt(4)) //Qual caracter está na posição 4
console.log(numero.charAt(2))
console.log(escola.charAt(5)) //Retorna um valor 'vazio', não gera erro!
console.log(escola.charCodeAt(3)) //valor da tabela unicode (código HTML)
console.log(escola.indexOf('3')) //procurar a posição da string '3'

console.log(escola.substring(1)) // vai mostrar a frase a partir da posição '1'
console.log(escola.substring(0,3)) // vai mostrar a frase a partir do '0' até o indice '3' (o indice '3' não esta incluso) 'vai do indice 0 e me mostre 3 casas'

console.log('Escola '.concat(escola).concat('!')) //concatenar
console.log('Escola' + escola + '!') // concatenar
console.log(escola.replace(3, 'e'))
console.log(escola.replace(/\d/, 'e')) //substituir todos os digitos pela letra 'e'
console.log(escola.replace(/\w/g, 'e')) //substituir tudo pela letra e

console.log('Ana,Maria,Pedro'.split(',')) //transforma em um array (vetor)