// Função em JS é First-Class Object (Citizens)
// High-order function

// Criar de forma literal
function fun1() { }

// Armazenar em uma variavel
const fun2 = function () { }

// Armazenar em um array
const array = [function(a, b) {return a + b}, fun1, fun2]
console.log(array[0](2, 3))

// Armazenar em um objeto
const obj = {}
obj.falar = function () { return 'Opa'}
console.log(obj.falar())


// Armazenar função como parametro
function run(fun) {
    fun()
}
run(function () { console.log('Executando... ')})


// Uma função pode retornar/conter uma função
function soma(a,b){
    return function(c){
        console.log(a + b + c)
    }
}
// Primeira forma de chamar a função
soma(2, 3)(4)
// Segunda forma de chamar a função
const retorno = soma(2, 3)
retorno(4)