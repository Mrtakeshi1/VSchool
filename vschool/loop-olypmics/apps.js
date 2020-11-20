for (var i = 0; i <= 9; i++) {
  console.log(i);
}

for (var i = 9; i >= 0; i--) {
  console.log(i);
}

var fruit = ['banana', 'orange', 'apple', 'kiwi'];
for (var i = 0; i < fruit.length; i++) {
  console.log(fruit[i]);
}

var nums = [];
for (var i = 0; i <= 9; i++) {
  nums.push(i);
}
console.log(nums);

for (var i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

var fruit2 = ['banana', 'orange', 'apple', 'kiwi', 'pear', 'peach'];
var fruit3 = [];
for (var i = 0; i <= 5; i++) {
  if (i % 2 === 0) {
    fruit3.push(fruit2[i]);
  }
}
console.log(fruit3);
