const notas = [6.7, 7.4, 9.8, 8.1, 7.7]

for (i in notas){
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'Gustavo',
    sobrenome: 'de Julio',
    idade: 27,
    peso: 62.5
}
for (let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}