const array =['Apple','Ball','Cat','Dog','Elephant'];
// Array.length
console.log('array.length',array.length);
// Array toString()
console.log('toString()',array.toString());
//Array push()
array.push('Fogg');
console.log('push',array);
//Array pop()
array.pop();
console.log('pop',array);

// Array shift()
array.shift();
console.log('Shift',array);
// Array unshift()
array.unshift('Viji');
console.log('Un Shift',array);

// Array join();

array.join('');
console.log('Join',array);


  let slicedValues = array.slice(1,3);
  console.log(array);
  console.log(slicedValues);

  let returnedArr = array.splice(2,1,{name: "educative"});
  console.log(array);
  console.log(returnedArr);