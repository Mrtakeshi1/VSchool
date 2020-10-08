var header = document.querySelector('#header');
header.textContent = 'JavaScripit Made This!!';

var newP = document.createElement('p');
newP.innerHTML = '<span class="name">Takeshi</span> wrote the JaveScript';
var header = document.getElementById('header');
header.append(newP);

var messages = document.getElementsByClassName('message');
messages[0].textContent = 'Knock Kncock';
messages[1].textContent = 'Whos there?';
messages[2].textContent = 'I dont know i forgot the joke';
messages[3].textContent = 'LOL:)';

let clear = document.getElementById('clear-button');
clear.onclick = function () {
  newText();
};

function newText() {
  var messages = document.getElementsByClassName('message');
  messages[0].textContent = '';
  messages[1].textContent = '';
  messages[2].textContent = '';
  messages[3].textContent = '';
}

const dropDown = document.getElementById('theme-drop-down');
dropDown.addEventListener('change', function (e) {
  console.log(e.target.value);
});
