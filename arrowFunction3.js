let comparaComThis = function (param) {
    console.log(this === param)
}

comparaComThis(global) // false

const obj = {}
comparaComThis = comparaComThis.bind(obj) // true
comparaComThis(global) // false
comparaComThis(obj) // true

let comparaComThisArrow = parametro => console.log(this === parametro)
comparaComThisArrow(global) // false
comparaComThisArrow(module.exports) // true

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj) // false, não é possivel mudar o 'this' numa função arrow, ele vai sempre chamar o objeto da função que esta escrita


// O THIS NUNCA VARIA NUMA FUNÇÃO ARROW, ELE VAI SEMPRE SE RELACIONAR AO CONTEXTO DA FUNÇÃO 