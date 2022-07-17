const nome = 'Rebeca'
const concatenacao = 'Ola ' + nome + '!' //Não se pode quebrar a linha
const template = `
    Olá
    ${nome}!`
console.log(concatenacao, template)

//expressoes
console.log(`1 + 1 = ${1+1}`)

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}`)