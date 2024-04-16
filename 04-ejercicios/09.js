let pairs=[
    [1,{name:'juan'}],
    [2,{name:'pedro'}],
    [3,{name:'lalo'}],
]

let array=[
    {id:0,name:''}
]

function pairsToArray(arr){
for ( key in arr) {
    let elemento=arr[key]
    //console.log(elemento[1].name)
    array[key] = [{id:key, name:elemento[1].name}]
    
}
return array
}

let resultado = pairsToArray(pairs)
console.log(resultado)

