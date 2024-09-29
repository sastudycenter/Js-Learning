function foo() {
    let x = y = 0;
    x++;
    console.log('x',x++)

}

console.log(foo(), typeof x, typeof y);