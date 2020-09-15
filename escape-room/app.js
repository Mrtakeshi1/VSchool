const readline = require("readline-sync");
const name = readline.question("What is your name? ");
console.log("Hello " + name + "!");
var room = readline.question("You find yourself locked in a room! " + "press enter to continue good luck!!");
var escape = readline.question("what do you do?")
console.log(escape + " /" + " not unless you find the key!!");
var op = ["Put your hand in the hole", "Inspect the hole", "Look around the room"];
var hole = readline.keyInSelect(op, "You see a hole on the wall, what do you do?");
console.log("You " + op[hole]);
if (op) {

}