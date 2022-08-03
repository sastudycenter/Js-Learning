var x = 10;
var display = function () {
    console.log(x);
    var x = 12;
}
display()
console.log(x);
