const resultado = nota => nota >= 7 ? 'Aprovado':'Reprovado'
console.log(resultado(7.1))

/*const variavel = 
  nomeFuncao (só tem um parametro, por isso o '()' não é necessário) 
  => (função arrow, o return é implicito) 
  nomeFuncao >= 7 (expressão relacional) *1º operando
  ? (operador ternário - 3 operandos)
  'Aprovado' (se for true) *2º operando
  'Reprovado' (se for false) *3º operando
  O operador ternário é: nota >= 7 ? 'Aprovado':'Reprovado' */

let nota = 5
const status = nota >= 7 ? 'Aprovado':'Reprovado' //variavel = operador ternário

//-------------

function resultado2 (nota){
    return nota >= 7 ? 'Aprovado':'Reprovado' // return operador ternário
}
console.log(resultado2(6.5))

//-------------

const resultado3 = nota => { //função arrow
    return nota >= 7 ? 'Aprovado':'Reprovado' // return operador ternário
}
console.log(resultado3(10))