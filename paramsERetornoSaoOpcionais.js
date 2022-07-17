function area (largura, altura) {
    const area = largura * altura
    if (area > 20){
        console.log(`Valor acima do permitido: ${area}m2.`)
    }
    else {
        return area
    }
}
console.log(area(2,2))
console.log(area(2)) // Not a Number
console.log(area()) // Not a Number
console.log(area(2, 3, 4, 5, 6)) //Funciona ignorando o restante
console.log(area(5, 5)) //Retorna a msg e o valor 'undefined' porque não retorno a função 'area'
