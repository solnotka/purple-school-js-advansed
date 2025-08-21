"use strict";

function rollDice(type) {
    const availableDices = ['d4', 'd6', 'd8', 'd10', 'd12', 'd16', 'd20'];

    if (!availableDices.includes(type)) {
        return 'Этот кубик кинуть невозможно';
    }

    const dice = Number(type.slice(1));

    return Math.floor(Math.random() * dice + 1)
}

console.log(rollDice('d1'));
console.log(rollDice("d6"));
console.log(rollDice("d8"));
console.log(rollDice("d20"));
console.log(rollDice("d4"));
console.log(rollDice("d4"));