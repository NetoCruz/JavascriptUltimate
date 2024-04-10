//indice no puede ser menor a 0
//elemento tiene que existir en el array
function getByIdx(arr,idx){
   if(idx<0 || arr.length <= idx){
    return 'Elemento no existe'
    }else return arr[idx] 

   
}

let resultado= getByIdx([1,2,3,4],3)

console.log(resultado)