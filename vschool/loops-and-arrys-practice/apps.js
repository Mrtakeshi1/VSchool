var officeItems = [
  'stapler',
  'monitor',
  'computer',
  'desk',
  'lamp',
  'computer',
  'lamp',
  'stapler',
  'computer',
  'computer'
];

var count = 0;
var value = 'computer';

for (var i = 0; i < officeItems.length; i++) {
  if (officeItems[i] == value) {
    count++;
  }
}
console.log(count + ' computers');

var people = [
  {
    name: 'Mike',
    age: 12,
    gender: 'male'
  },
  {
    name: 'Madeline',
    age: 80,
    gender: 'female'
  },
  {
    name: 'Cheryl',
    age: 22,
    gender: 'female'
  },
  {
    name: 'Sam',
    age: 30,
    gender: 'male'
  },
  {
    name: 'Suzy',
    age: 4,
    gender: 'female'
  }
];

people.map((person) => {
  if (person.age < 18) {
    console.log(person.name + 's not old enough ' + person.age);
  } else if (person.age > 18) {
    console.log(person.name + 's old enough ' + person.age);
  }
});
