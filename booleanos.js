let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo) // '!' = negação, '!!' = dupla negação, volta ao original - sempre se usa pra descobrir se o valor é verdadeiro ou falso

console.log('os verdadeiros... ') //não são do tipo boolean mas se comportam como (V/F)
console.log(!!3) //forçando uma conversão para V e F
console.log(!!-1)
console.log(!!' ')
console.log(!!'texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('pra finalizar... ')
console.log(!!('' || null || 0 || 'epa')) //vai pegar a primeira opção
console.log('' || null || 0 || 'epa' || 123)


let nome = 'Lucas'
console.log(nome || 'Desconhecido')
console.log(!!(nome || ''))