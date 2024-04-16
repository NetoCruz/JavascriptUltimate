
// Escribe un programa que imprima los 50 primeros números de la sucesión
//   de Fibonacci empezando en 0.
//   - La serie Fibonacci se compone por una sucesión de números en
//     la que el siguiente siempre es la suma de los dos anteriores.
//     0, 1, 1, 2, 3, 5, 8, 13...

function fibonacci(){
     let array=[0,1]
    for (let i = 0; i < 20; i++) {
       
        let value = array[i] + array[i+1]
        array.push(value)
       // console.log(array)
    }
    return array
}
let resultado= fibonacci()
console.log(resultado)

