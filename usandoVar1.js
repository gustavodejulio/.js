{
    {
        {
            { 
                var sera = 'Será???'
                console.log(sera)
                //Em outras linguagens isso só funcionaria dentro desse escopo. No JS uma variavel definido com var só tem 2 escopos possíveis
            }   
        }   
    }
}
console.log(sera) //funciona porque a variavel esta no escopo global (não tem nenhuma função definida, apenas blocos)

function teste(){
    var local = 123
    console.log(local) //aqui funciona porque ela está no escopo da "FUNÇÃO"
}
teste()
//console.log(local) //não funciona porque esta fora do escopo da função