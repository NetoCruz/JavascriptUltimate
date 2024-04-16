let longitud =10

function crearArray(num){
 array=[]
 let i=1

while(i<=num){
  array.push(i)
  i++
}


return array
}

let resultado =crearArray(longitud)
console.log(resultado)