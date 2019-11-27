// a kohta
// console.log("hello world")

// b kohta
function greet() {
    console.log("Hello World");
}
//greet();

// c kohta

function logGreeting(fn) {
    fn();
}
//logGreeting(greet);

// d kohta
//logGreeting(function() {
 //   console.log("Inline function definition");
//});

// e kohta
let greetMe = function() {
    console.log("Function name assignment");
}
//greetMe();

// f kohta
require("./greet")
