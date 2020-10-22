const form = document.getElementById('add-todo');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const listItem = form.listItem.value;

  if (form.listItem.value != '') {
    const li = document.createElement('li');
    document.getElementById('list').append(li);
    console.log(listItem);

    const div = document.createElement('div');
    div.textContent = listItem;
    li.append(div);

    const button = document.createElement('button');
    button.textContent = 'x';
    li.append(button);
    button.addEventListener('click', function (ev) {
      ev.target.parentNode.remove();
      console.log(ev);
    });
  }
});
