function carro(velocidadeMaxima = 200, delta = 5){
    //atributo privado
    let velocidadeAtual = 0 //não é possível acessar essa função diretamente

    //método publico
    this.acelerar = function (){
        if (velocidadeAtual + delta <= velocidadeMaxima){ // o this torna a função publica, const e let deixam a função privada
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    // método publico
    this.getvelocidadeAtual = function() {
        return velocidadeAtual
    }
}

const uno = new carro // instanciar a função, não precisa do parametro porque esta usando os que ja foram definidor(200, 5)
uno.acelerar()
uno.acelerar()
console.log(uno.getvelocidadeAtual())

const ferrari = new carro (300, 20)
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getvelocidadeAtual())

console.log(typeof carro) //função
console.log(typeof uno) //objeto