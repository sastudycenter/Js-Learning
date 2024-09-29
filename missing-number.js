// Find the missing number from the linear array 
// OUTPUT: [ 4, 8, 10, 12 ]

 const array = [1,3,6,9,7,2,11,14,13];
 const missing=[];
 const sorted_array = array.sort((a,b)=>a-b);
 for(let i=0;i<sorted_array.length;i++){
    if(sorted_array[i+1]-sorted_array[i]===2){
        missing.push(sorted_array[i]+1);
    }
 }
console.log(missing);