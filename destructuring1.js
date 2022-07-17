// novo recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const { nome, idade } = pessoa
console.log(nome, idade)

const { nome: n, idade: i} = pessoa
console.log(n, i)

const { endereco } = pessoa
console.log(endereco)

const { endereco: {logradouro, numero, cep } } = pessoa
console.log(endereco, logradouro, numero, cep)

const { tipo, codigo = true } = pessoa
console.log(tipo, codigo)

//const { conta: {ag, num}} = pessoa //ERRO! - não é possivel ler a propriedade de 'undefined' ou null (só o ultimo dado pode estar nulo ou indefinido)