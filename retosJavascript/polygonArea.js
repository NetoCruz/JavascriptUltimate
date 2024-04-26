
function polygonArea(polygon,side1,side2){
    let accion=polygon

    switch(accion){
        case 'cuadrado':
            return console.log('el area del cuadrado es ' + side1*side2) 
            break;
        case 'rectangulo':
           return console.log('el area del rectangulo es ' + side1*side2)
            break;
        case 'triangulo':
    return console.log('el area del triangulo es '+ side1*side2/2)
             break;
    
        default:
            console.log('accion no reconocida')
        }
}
polygonArea('cuadrado',2,2)
polygonArea('rectangulo',2,2)
polygonArea('triangulo',2,2)