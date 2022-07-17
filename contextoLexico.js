const valor = 'Global'

function minhaFuncao() { // o contexto léxico que essa função foi criada é o arquivo contextoLexico.js
    console.log(valor)
}

function exec(){
    const valor = 'Local'
    console.log(valor) // 'Local'
    minhaFuncao() //ela carrega consigo 'Global'
}
exec()