let array=[
    {
        id:1,
        nombre:'Juan',
    },
    {
        id:2,
        nombre:'Pedro',
    },
    {
        id:3,
        nombre:'Pablo',
    }
]


function toPairs(arr){
    // let pairs=[]
    //  for ( user of arr) {
    //     pairs.push(user)
    // }

    // return pairs

    let pairs=[]

    for ( idx in arr) {
       let elemento = arr[idx]
       pairs[idx] = [elemento.id, elemento]
    }
   return pairs
}

let resultado = toPairs(array)

console.log(resultado)