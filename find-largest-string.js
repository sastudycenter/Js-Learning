//Input: "fun&!! time"
//Output: time

const string = 'fun &!! time';
const split = string.split(' ');
let count =0;
let longest_string;
for(let i =0;i<split.length;i++){
if(split[i].length > count){
    count =split[i].length;
    longest_string = split[i];
}
}
console.log(longest_string);