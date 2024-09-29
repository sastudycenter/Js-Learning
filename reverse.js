const reverse =(string)=>{
    const new_array=[];
    const split = string.split(' ').reverse();
    for(let i=0;i<split.length;i++){
        const rev =  split[i].split('').reverse().join('');
        new_array.push(rev);
    }
    const total = new_array.join(' ');
    return total;
}


console.log(reverse('syed ahamed'))