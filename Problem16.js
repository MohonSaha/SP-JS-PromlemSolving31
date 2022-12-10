// Swaping two number usuing temporary variable

var a = 7;
var b = 8;
console.log(`The value off a is ${a} and the value of b is ${b}`);

var temp;
temp = a;
a = b;
b = temp;
console.log(`The value off a is ${a} and the value of b is ${b}`);


// Swaping two number without usuing temporary variable

var a = 7;
var b = 8;
console.log(`The value off a is ${a} and the value of b is ${b}`);

a = a + b;
b = a - b;
a = a - b;
console.log(`The value off a is ${a} and the value of b is ${b}`);

