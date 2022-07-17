//Vantagens: sintaxe reduzida, ter o 'this' fixo e é uma função anônima
let dobro = function (a){
    return 2 * a
}
console.log(dobro(2))


dobro = (a) => { //caso queira chamar a função arrow depois é preciso armazena-la em uma constante
    return 2 * a
}

dobro = a => 2 * a //quando só tem um parametro o 'return' é implicito
console.log(dobro(Math.PI))

let ola = function (){
    return 'Olá'
}

ola = () => 'Olá' //não possui parametro (forma padrão)
ola = _ => 'Olá' //possui parametro, ignora ele
console.log(ola())

let teste = function (a){
    return 'Ola' + a
}
console.log(teste('Gustavo'))

teste = (a) => 'Olá ' + a
console.log(teste('Marina'))

teste = (b) => `Olá ${b}, tenha um bom dia`
console.log(teste('Gustavo'))