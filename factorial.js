const factorial = (number)=>{
    let factorial_number=1;
    for(let i=number;i>=1;i--){
        factorial_number*=i;    
    }
   return  factorial_number;
}

console.log(factorial(8))