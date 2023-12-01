'use strict'

let participants = [];

let number = parseInt(prompt('How many participants?: '))

for (let i = 0; i < number; i++) {
    participants.push(prompt('Give the name of the participant.:' ));
}

for (let name of participants.sort())
document.querySelector('#participants_names').innerHTML += '<li>'+'Participants: ' + name +'</li>';