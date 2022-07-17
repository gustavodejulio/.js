function tratarErroELancar(erro){
    //throw new Error('...')
    //throw 'mensagem'
    //throw 10
    //throw true
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj){
    try{ //vai tentar executar essa função
        console.log(obj.name.toUpperCase() + '!!!') //name
    } catch (e){ //caso o try não funcione vai executar essa função
        tratarErroELancar(e)
    } finally{//vai executar independente de erro ou não
        console.log('final')
    }
}

const obj = { nome: 'Roberto'} //nome
imprimirNomeGritado(obj)