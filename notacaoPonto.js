console.log(Math.ceil(6.1)) //arredonda pra cima

const obj1 = {}
obj1.nome = 'Gustavo'
console.log(obj1)
//obj1['nome'] = 'Gustavo' //funciona da mesma forma, só da mais flexibilidade ao escrever o nome da chave (não é o mais recomendado)

function Obj(nome){
    this.nome = nome // o nome que foi associado (esse nome ficará 'publico')
    this.exec = function(){
        console.log('Exec')
    }
}
const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')
console.log(obj2)
console.log(obj3)
console.log(obj2.nome)
console.log(obj3.nome)
obj2.exec()