// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

var string = 'welcome  Home Raj Kamal'

// var reverese = reverseBySeparator(string,'')

var reverese = reverseBySeparator(string, "");
var reverese2 = reverseBySeparator(reverese, " ");


console.log(reverese)
console.log(reverese2)

function reverseBySeparator(string, separator) {
  return string.split(separator).reverse().join(separator)
}