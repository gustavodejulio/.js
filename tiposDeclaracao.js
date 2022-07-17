console.log(soma(3, 4)) // funciona porque o JS carrega todas as funções antes
//console.log(sub(3, 4)) // não funciona porque tem que ser depois dela ser declarada
//console.log(mult(3, 4)) // não funciona porque tem que ser depois dela ser declarada

// tradicional: function declaration
function soma(a, b){
    return a + b
}

// function expression
// declarar uma função anonima e associar a uma variavel ou constante
const sub = function (x, y){
    return x - y
}

//named function expression
// misturar as duas ideias
// associa a uma variavel ou constante a função nomeada
const mult = function mult(x, y){
    return x*y
}