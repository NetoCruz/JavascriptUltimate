

let words='La jirafa es la mejor amiga'
let string=['la','jirafa','lola','es','la','mejor','jirafa','la']
let count=0
let newArr=[]
for (let i = 0; i < string.length; i++) {
    let letter=0
    for (letter = 0; letter < string.length; letter++) {
        
        if(string[letter]===string[i+1]){
         newArr.push(string[letter])
    //console.log('coincide', count)
   }
    }
   
    //letter++
}
console.log(newArr) 
 

