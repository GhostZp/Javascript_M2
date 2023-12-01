'use strict'

let numbers = [];
let num = 0

do {
    num = parseInt(prompt('Give me numbers, stop by typing 0:' ));
    numbers.push(num)
} while (num != 0);

numbers.sort(function(a, b){return b-a});

console.log(numbers);