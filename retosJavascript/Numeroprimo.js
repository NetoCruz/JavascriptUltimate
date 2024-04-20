

//function obtenerNumeroPrimo(){

let numbers=[]
let result=[]
let operator=[]
    for(i=2; i<=100; i++){
        numbers.push(i)
    }

    function isPrime(num){
    
      
                for (let i = 2; num > i; i++) {
                  if (num % i === 0) {
                    return false;
                  }
                }
                return num > 1;
              
            //  for (let i = 0; i<numbers.length-1; i++) {
            //     let re =element % numbers[i+1]
            //     result.push(re)
            //     //console.log(element,re)
            //       // if (element % numbers[i] === 0) {
            //       //  console.log(element,'numero natural')
            //       // }
            //     }
                
    }

    console.log(numbers.filter(isPrime));
//     const resultados = {}
// for (const el of result) resultados[el] = resultados[el] + 1 || 1

// console.log(resultados)
  
    // for(i=2; i<=10;i++){
    //  numbers.push(i)
    //  } 
    //  numbers.sort(function (b, a) {
    //     return a -b;
    //   })  
             
            //  for(i=0; i<=numbers.length-1;i++){
            //      let re = numbers[0]%numbers[i+1]
            //  result.push(re)
            //     }  

            // function isPrime(num) {
            //     for (let i = 2; num > i; i++) {
            //       if (num % i === 0) {
            //         return false;
            //       }
            //     }
            //     return num > 1;
            //   }
            //  console.log(numbers.filter(isPrime));
    
         //numbers.forEach(function (element) {
                
                 
                    
              
           
               
    
   
 