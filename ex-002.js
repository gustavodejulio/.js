function qualTriangulo (lado1, lado2, lado3){
    if (lado1 == lado2 == lado3){
        console.log('Triângulo Equilatero')
    }
    else if (lado1 == lado2 || lado1 == lado3 || lado2 == lado3){
        console.log('Triângulo Isósceles')
    }
    else{
        console.log('Triângulo Escaleno')
    }
}
qualTriangulo(1,2,3)