function todasNotas (nota){
    if (nota >= 7){
        console.log('Aprovado com ' + nota)
    }
    if (nota >= 5 && nota < 7 ){
        console.log('Recuperação com ' + nota)
    }
    if (nota < 5) {
        console.log('Reprovado com ' + nota)
    }
}

todasNotas(8.1)
todasNotas(5.1)
todasNotas(4)

function soBoaNoticia (nota) {
    if (nota >= 7){
        console.log('Aprovado com '+ nota)
    }
}

soBoaNoticia(8)
soBoaNoticia(6)

function seForVerdadeEuFalo (valor){
    if (valor) {
        console.log('É verdade...' + valor)
    }
}
seForVerdadeEuFalo() //undefined = false
seForVerdadeEuFalo(null) //false
seForVerdadeEuFalo(undefined) //false
seForVerdadeEuFalo(NaN) //false
seForVerdadeEuFalo('') //false
seForVerdadeEuFalo(0) //false
seForVerdadeEuFalo(-1) //true
seForVerdadeEuFalo(' ') //true
seForVerdadeEuFalo('?') //true
seForVerdadeEuFalo([]) //true
seForVerdadeEuFalo([1, 2]) //true
seForVerdadeEuFalo({}) //true