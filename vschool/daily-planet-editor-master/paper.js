/*
This code contains only syntax and code style problems. The logic of the code works,
so DO NOT change the functionality of anything in here.

In short, you shouldn't need to add your own statements anywhere,
just fix the existing ones.
*/

// Written by Kent, Clark

var Enemies = [
  'Lex',
  'Batman',
  'Darkseid',
  'Brainiac',
  'General Zod',
  'Doomsday'
];

function whoWins(is_There_Kryptonite, enemy_Name) {
  if (!is_There_Kryptonite) {
    return 'Superman beats ' + enemy_Name + ', of course';
  } else {
    return (
      'Depends on how quick Superman can get rid of the Kryptonite. ' +
      enemy_Name +
      ' could possibly win this one.'
    );
  }
}

for (var i = 0; i < Enemies.length; i++) {
  var is_There_Kryptonite;
  if (i % 2 === 0) {
    is_There_Kryptonite = true;
  } else {
    is_There_Kryptonite = false;
  }
  console.log(whoWins(is_There_Kryptonite, Enemies[i]));
}

function howAttractedIsLoisLaneToMe() {
  // 1 is not at all attracted, 10 is "super" attracted...
  return Math.floor(Math.random() * 10 + 1);
}

console.log(howAttractedIsLoisLaneToMe());

var clarkKent = true;
var superMan = false;

while (clarkKent) {
  console.log("I'm just a nerdy columnist");
  var phoneBoothQuickChange = Math.random();
  if (phoneBoothQuickChange >= 0.5) {
    clarkKent = false;
    superMan = true;
    console.log("Now I'm Superman!");
  }
}
