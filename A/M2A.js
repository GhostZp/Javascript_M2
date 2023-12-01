'use strict'

let numbers = [];

for(let e = 0; e < 5; e++) {
    numbers.push(prompt('Give me 5 numbers:' ));
}

for(let e = numbers.length - 1; e >= 0; e--) {
    console.log(numbers[e]);
}