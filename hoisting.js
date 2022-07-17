console.log('a =', a) //undefined
var a = 2 //o valor não é mostrado mas a variavel é declarada, caso não tenha essa linha o programa da erro 
console.log('a =', a)

//é como se essa função fosse feita automaticamente (içar/levantar/puxar pra cima) *hoisting
var b
console.log('b =', b)
b = 1
console.log('b =', b)

//mesmo efeito dentro de uma função
function teste(){
    console.log('a =', a)
    var a = 2
    console.log('a =', a)
}
teste()

//------------------------------------------------------------------------
console.log('a =', a) //erro
let a = 2 