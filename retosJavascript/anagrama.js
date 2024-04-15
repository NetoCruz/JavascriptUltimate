
function isAnagrama(str1,str2){
 
 element1=str1.split('').sort()
 element2=str2.split('').sort()

let n1=element1.length
let n2=element2.length

if (n1 != n2){
  return false;  
}else{
    for (let i = 0; i < n1; i++){
         if (element1[i] != element2[i]){
           return false; 
         }else return true;
            
    }
        
}
        

       
   
    


}

let resultado = isAnagrama('roma','ramo')
console.log(resultado)