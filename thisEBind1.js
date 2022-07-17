const pessoa = {
    saudacao: 'Bom dia!',
    falar() { //outra forma de chamar uma função (atualizada)
        console.log(this.saudacao) //não funciona sem o this
    }
}

pessoa.falar()
const falar = pessoa.falar //é possivel criar uma constante para uma função, mas o this é deslocado para a constante, sendo assim o valor da função 'undefined'
falar() // conflito entre paradigmas: funcional e 00

const falarDePessoa = pessoa.falar.bind(pessoa) // amarrar um determinado objeto
falarDePessoa()