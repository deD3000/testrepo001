'use strict'
const view = {
    displayMessage: (msg) => {
        const messageArea = document.getElementById('messageArea');
        messageArea.innerHTML = msg;
    },

    displayHit: (location) => {
        let cell = document.getElementById(location);
        cell.setAttribute('class', 'hit')
    },

    displayMiss: (location) => {
        let cell = document.getElementById(location);
        cell.setAttribute('class', 'miss')
    }
}
