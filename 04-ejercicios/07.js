
function calculoImpuesto(precio, impuesto){
//return ((precio*(impuesto)*100)/100)+precio
return precio + precio * impuesto
}

let resultado = calculoImpuesto(19.90, 0.15)
console.log(resultado)