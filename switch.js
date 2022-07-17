/*const imprimirResultado = function (nota){
    switch (Math.floor(nota)){//a expressão retorna um VALOR e não V/F
        case 10: //executa o case 10 e vai executando os outros abaixo
        case 9:
            console.log('Quadro de Honra')
            break //palavra reservada para ele parar de executar e sair do laço
        case 8: case 7: //mesma coisa do exemplo de cima, não pode usar virgula
            console.log('Aprovado')
            break
        case 6: case 5: case 4:
            console.log('Recuperação')
            break
        case 3: case 2: case 1: case 0: // case 3, 2, 1, 0 (não executa)
            console.log('Reprovado')
            break
        default: //mesma função do else, não precisa estar no final
            console.log('Nota inválida')
    }
    console.log('FIM!')
}

imprimirResultado(10)
imprimirResultado(7.4)
imprimirResultado(5)
imprimirResultado(2)
imprimirResultado(-1)*/

const verdadeiroOuFalso = function (valor){
    switch (valor){
        case 'verdadeiro':
            console.log(valor)
            break
        case 'falso':
            console.log(valor)
            break
        default:
            console.log('Inválido')
    }
}
verdadeiroOuFalso('verdadeiro')
verdadeiroOuFalso('falso')
verdadeiroOuFalso('alo')