const funcs = []
for (var i = 0; i < 10; i++){
    funcs.push(function(){
        console.log(i)
    })
}
funcs[2]() //a variavel não tem escopo de bloco, então o resultado vai ser SEMPRE 10
funcs[8]()