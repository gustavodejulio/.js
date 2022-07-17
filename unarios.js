let num1 = 1
let num2 = 2

num1++ //pós-fixada (acrescenta 1 unidade a variavel)
console.log(num1)
--num1 //pré-fixada (tem prioridade na ordem de precedencia)
console.log(num1)

console.log(++num1 === num2--) /* 2 != 1, mas como a operação de '++' é feita antes da operação de estr. igual 
                                  e a operação '--' é feita depois da comparação vai retornar os valores 2 e 2
                                  código complexo, não é recomendado o uso */
console.log(num1 === num2) 