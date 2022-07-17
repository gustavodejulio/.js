var numero = 1
{
    var numero = 2
    console.log('dentro= ', numero)
}
console.log('fora= ', numero)

var num = 321
function teste(){
    var num = 123
    console.log('in', num)
}
teste()
console.log('out', num)