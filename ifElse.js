const imprimirResultado = function(nota){
    if (nota >= 7){
        console.log('Aprovado')
    }
    else{
        console.log('Reprovado')
    }
}

imprimirResultado(10)
imprimirResultado(6)
imprimirResultado('Epa!') //cuidado!! ele vai retornar falso por JS ser uma linguagem fracamente tipada