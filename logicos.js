/*console.log(true && true)
console.log(true && false)
console.log(false && true)
console.log(false && false)

console.log('-----')

console.log(true || true)
console.log(true || false)
console.log(false || true)
console.log(false || false)*/

function compras(trabalho1, trabalho2){
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    //const comprarTv32 = !!(trabalho1 ^ trabalho2) //bitwise xor
    const comprarTv32 = trabalho1 != trabalho2 //somente 1 dos dois pode ser verdadeiro para retornar 'verdadeiro', se os dois foram iguais returna 'falso'
    const manterSaudavel = !comprarSorvete //operador unário

    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel } // chave: valor, ja é feito automaticamente
}
console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))
