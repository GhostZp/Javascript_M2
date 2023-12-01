'use strict'

let dogs = [];

for(let i = 0; i < 6; i++) {
    dogs.push(prompt('Give me 6 dog names:' ));
}

for (let name of dogs.reverse())
document.querySelector('#dogs_names').innerHTML += '<li>'+'Dogs: ' + dogs +'</li>';