const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

// Sem callback
const notasBaixas = []
for (let i in notas){
    if (notas[i] < 7){
        notasBaixas.push(notas[i])
    }
}
console.log(notasBaixas)

// Com callback
const notasBaixas2 = notas.filter(function (nota){ // notasBaixas é um array, notas.filter() vai retornar true ou false
    return nota < 7 // as notas que forem menor do que 7 vai ser true e vai ser adicionada no array notasBaixas2
}) 
console.log(notasBaixas2)

const notasBaixas3 = notas.filter(nota => nota < 7)
console.log(notasBaixas3)

const notasMenorQue7 = nota => nota < 7 // cria um parametro para ser usado em qualquer função
notasBaixas4 = notas.filter(notasMenorQue7)
console.log(notasBaixas4)