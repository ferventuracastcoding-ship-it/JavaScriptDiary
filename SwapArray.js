let numbers = [10, 20, 30, 40];

let temp = numbers[0];

numbers[0] = numbers[3];
numbers[3] = temp;

console.log(numbers);
// [40, 20, 30, 10]
