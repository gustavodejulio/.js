function teste1(num){
    if(num > 7) //o uso de chaves é opcional, mas para o 'if' somente uma linha 
        console.log(num)

    console.log('Final') //esta fora do IF, então sempre será executada
}

//teste1(6)
//teste1(8)

function teste2(num){
    if(num > 7)
        ; //esse bloco vazio está associado ao 'if' 

    {//esse bloco não esta associado ao 'if'
        console.log(num)
    }
}

teste2(6)
teste2(8)
//NÃO USAR ';' EM ESTRUTURAS IF POIS PODE TORNAR SEU CÓDIGO BAGUNÇADO 