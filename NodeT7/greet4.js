function Greet4() {
    this.greeting = 'Hello greet4!'
    this.greet = function() {
        console.log(this.greeting);
    }
}
module.exports = Greet4();