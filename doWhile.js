//estrutura pouco usada
function getNumeroEntre (min, max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0
do {
    opcao = getNumeroEntre(-1, 10)
    console.log(`O número escolhido foi ${opcao}`)
} while (opcao != -1) //pelo menos uma execução é feita

console.log('Até a próxima')