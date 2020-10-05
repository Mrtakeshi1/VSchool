function handleMouseOver(event) {
  event.target.style.backgroundColor = 'blue';
}

function handleMouseDown(event) {
  event.target.style.backgroundColor = 'red';
}

function handleMouseUp(event) {
  event.target.style.backgroundColor = 'yellow';
}

function handleDblClick(event) {
  event.target.style.backgroundColor = 'green';
}

function handleWheel(event) {
  const box = document.getElementById('box');
  box.style.backgroundColor = 'orange';
}

document.addEventListener('keydown', function (event) {
  console.log(event.which);
});

document
  .getElementById('box')
  .addEventListener('mouseover', (e) => handleMouseOver(e));
document
  .getElementById('box')
  .addEventListener('mousedown', (e) => handleMouseDown(e));
document
  .getElementById('box')
  .addEventListener('dblclick', (e) => handleDblClick(e));
document
  .getElementById('box')
  .addEventListener('mouseup', (e) => handleMouseUp(e));
document.addEventListener('wheel', (e) => handleWheel(e));
