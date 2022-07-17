function pessoa(nome, sobrenome){
    this.nome = nome
    this.sobrenome = sobrenome
    this.falar = function (){
        return console.log(`Meu nome é ${nome} ${sobrenome}`)
    }
}

const p2 = new pessoa('Gustavo', 'de Julio')
const p3 = new pessoa('Marina', 'Cucco')
console.log(p2.nome, p2.sobrenome) // retorna os parametros
console.log(p2) // retorna o objeto
p2.falar() // retorna a função falar

////////

function produto(prod, preco){
    this.prod = prod
    this.preco = preco
}
const prod1 = new produto('Cadeira', 500)
console.log(`O produto é ${prod1.prod} e o preço é ${prod1.preco}`)

///////

const criar = (primeiro, ultimo) => {
    console.log(primeiro, ultimo)
}
criar('Luciane', 'Neves')

//////

const num = (num1, num2) => {
    return {
        falar: () => {
            console.log(`Primeiro: ${num1} Segundo: ${num2}`)
        }
    }
}
const nums = num(1, 2)
nums.falar()

////// Método do video

function Pessoa1(nome){
    this.falar = function(){
        console.log(`Meu nome é ${nome}`)
    }
}
const p1 = new Pessoa1('Gustavo')
p1.falar()