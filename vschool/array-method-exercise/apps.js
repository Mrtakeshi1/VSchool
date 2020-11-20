var fruits = ['banana', 'apple', 'orange', 'watermelon'];
var vegetables = ['carrot', 'tomato', 'pepper', 'lettuce'];
vegetables.pop();
console.log(vegetables);

fruits.shift();
console.log(fruits);

var orangeIndex = fruits.indexOf('orange');
console.log(orangeIndex);

fruits.push('1');
console.log(fruits);

console.log(vegetables.length);

vegetables.push('3');
console.log(vegetables);

var food = fruits.concat(vegetables);
console.log(food);

var newFood = food.splice(4, 2);
console.log(newFood);

var reversedFood = food.reverse();
console.log(reversedFood);

var joinedfood = reversedFood.join(', ');
console.log(joinedfood);
