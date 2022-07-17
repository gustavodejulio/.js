// par nome/valor
const saudacao = 'Opa' // contexo léxico 1 (const nome = 'valor')

function exec(){
    const saudacao = 'Falaaa' //contexto léxico 2
    return saudacao
}

//Objetos são grupos aninhados de nome/valor
const cliente = {
    nome: 'Gustavo',
    idade: 27,
    sexo: 'Masculino',
    endereço: {
        logradouro: 'Rua Bras Belmonte',
        numero: 237,
        bairro:{
            CEP: 237
        }
    }
}
console.log(saudacao)
console.log(exec())
console.log(cliente)