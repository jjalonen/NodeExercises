// greet1.js kutsu
let greet = require('./greet1');
greet();
// greet2.js kutsu
let greet2 = require('./greet2').greet;
greet2();
//greet3.js kutsu
let greet3 = require('./greet3');
greet3.greet();
greet3.greeting = 'Changed value';
// greet4.js kutsu
let Greet4 = require('./greet4');
let grtr = new Greet4();
grtr.greet();