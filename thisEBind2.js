function pessoa(){
    this.idade = 0

    setInterval(function(){ // ja que estamos dentro da função que esta dentro de setInterval, o contexto muda então temos que garantir o acesso ao this quanto 'pessoa'
        this.idade++
        console.log(this.idade)
    }.bind(this), 1000) //sem o this é 'NaN', this aponta para pessoa no bind
}

new pessoa ()

// Outro método (burlando o fato de o this não se referir a função pessoa)

function pessoa1(){
    this.idade = 0
    const self = this // a constante garante que o this vai estar se referindo a função pessoa1
    setInterval(function(){
        self.idade++
        console.log(self.idade)
    }, 1000)
}