// luodaan funktiokonstruktori
function Person(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
}

// lisätään greet-toiminnallisuus prototyypin avulla
Person.prototype.greet = function() {
    console.log('Hello, ' + this.firstname + ' ' + this.lastname);
}
let john = new Person('John', 'Doe');
john.greet();
let jane = new Person ('Jane', 'Doe');
jane.greet();