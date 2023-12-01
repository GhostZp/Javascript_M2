'use strict';

let numbers = [];
let numberlist = false;

do {
    let num = parseInt(prompt('Give me numbers:' ), 10);

    if (numbers.includes(num)) {
        console.log('Number has already been given, stopping operations.');
        numberlist = true;
    } else {
    numbers.push(num);
    }
} while (!numberlist);

numbers.sort(function(a, b){return a-b});

console.log(numbers);