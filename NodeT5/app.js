// näkyvyysalueiden (scope) testi ja IIFE (Immediately Invoked Function Expression)
let firstname = 'Joonas';
// IIFE
(function(lastname){
    let firstname = 'John';
    console.log(firstname);
    console.log(lastname);
}('Doe'));

console.log(firstname);