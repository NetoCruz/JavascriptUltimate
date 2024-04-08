//personaje de tv

let nombre= 'Batman'

let personaje={
    nombre:'Batman',
    serie:'Batman la serie animada',
    edad:36,
}
console.log(personaje)
console.log(personaje.nombre)
//{} las llaves dicen que es un objeto

personaje.edad=40

delete personaje.serie;
console.log(personaje)