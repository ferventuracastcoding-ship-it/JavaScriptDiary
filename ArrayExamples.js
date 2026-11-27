// 91. Stack using an array
const stack = [];

stack.push("A");
stack.push("B");
stack.push("C");

console.log(stack.pop());

// 92. Queue using an array
const queue = [];

queue.push("A");
queue.push("B");
queue.push("C");

console.log(queue.shift());

// 93. Priority queue
const priorityQueue = [
    { name: "Task A", priority: 3 },
    { name: "Task B", priority: 1 },
    { name: "Task C", priority: 2 }
];

priorityQueue.sort(
    (a, b) => a.priority - b.priority
);

console.log(priorityQueue);

// 94. Array as a hash table
const hashTable = [];

hashTable[5] = "Alice";
hashTable[10] = "Bob";

console.log(hashTable[5]);

// 95. Two-pointer array
const values = [1, 2, 3, 4, 5];

let left = 0;
let right = values.length - 1;

while (left < right) {
    console.log(values[left], values[right]);

    left++;
    right--;
}

// 96. Sliding window
const data = [1, 2, 3, 4, 5];

const windowSize = 3;

for (let i = 0; i <= data.length - windowSize; i++) {
    const window = data.slice(
        i,
        i + windowSize
    );

    console.log(window);
}

// 97. Prefix sum
const nums2 = [2, 4, 6, 8];

const prefix = [0];

for (let i = 0; i < nums2.length; i++) {
    prefix.push(prefix[i] + nums2[i]);
}

console.log(prefix);

// 98. Fibonacci array
const fibonacci = [0, 1];

for (let i = 2; i < 10; i++) {
    fibonacci.push(
        fibonacci[i - 1] + fibonacci[i - 2]
    );
}

console.log(fibonacci);

// 99. Bubble sort
function bubbleSort(arr) {
    const result = [...arr];

    for (let i = 0; i < result.length; i++) {
        for (let j = 0; j < result.length - i - 1; j++) {

            if (result[j] > result[j + 1]) {
                const temp = result[j];

                result[j] = result[j + 1];
                result[j + 1] = temp;
            }
        }
    }

    return result;
}

console.log(
    bubbleSort([5, 2, 8, 1, 3])
);

// 100. Selection sort
function selectionSort(arr) {
    const result = [...arr];

    for (let i = 0; i < result.length; i++) {

        let minIndex = i;

        for (let j = i + 1; j < result.length; j++) {

            if (result[j] < result[minIndex]) {
                minIndex = j;
            }
        }

        const temp = result[i];

        result[i] = result[minIndex];
        result[minIndex] = temp;
    }

    return result;
}

console.log(
    selectionSort([64, 25, 12, 22, 11])
);
