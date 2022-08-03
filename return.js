const add = (array) =>{
let sum = 0;
////Method 1
// for(let i =0;i<array.length;i++){
//     sum+=array[i]
// }
////Method 2
// array.forEach(element => {
//     sum+=element
// });
////Method 3
// array.map(element=>{
//     sum+=element
// })
return sum;
}

console.log(add([1,3,4,5,6]))