function getNumAleatorio(min, max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = -1
while (opcao != -1){
    opcao = getNumAleatorio(-1, 10)
    console.log(`O número sorteado foi ${opcao}`)
}
console.log('Até a próxima')