function rand({min = 0, max = 1000}){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor) //retorna o menor número inteiro
}
console.log(rand({}))
console.log(rand({min: 50, max: 70}))
console.log(rand({max:10}))
const obj = {min: 100, max: 200}
console.log(rand(obj))