// luodaan luokka
let person = {
    firstname: 'John',
    lastname: 'Doe',
    greet: function() {
        console.log('Hello ' + this.firstname + ' ' + this.lastname);
    }
}

// person-olion greet-funktion kutsu
person.greet();
// attribuutin arvon tulostus
console.log(person.firstname);