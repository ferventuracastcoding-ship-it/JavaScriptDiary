// 71. Matrix addition
const A = [
    [1, 2],
    [3, 4]
];

const B = [
    [5, 6],
    [7, 8]
];

const result = [
    [A[0][0] + B[0][0], A[0][1] + B[0][1]],
    [A[1][0] + B[1][0], A[1][1] + B[1][1]]
];

console.log(result);

// 72. Transpose matrix
const transpose = [];

for (let col = 0; col < matrix[0].length; col++) {
    const newRow = [];

    for (let row = 0; row < matrix.length; row++) {
        newRow.push(matrix[row][col]);
    }

    transpose.push(newRow);
}

console.log(transpose);

// 73. Main diagonal
const diagonal = [];

for (let i = 0; i < matrix.length; i++) {
    diagonal.push(matrix[i][i]);
}

console.log(diagonal);

// 74. Diagonal sum
let diagonalSum = 0;

for (let i = 0; i < matrix.length; i++) {
    diagonalSum += matrix[i][i];
}

console.log(diagonalSum);

// 75. Anti-diagonal
const antiDiagonal = [];

for (let i = 0; i < matrix.length; i++) {
    antiDiagonal.push(
        matrix[i][matrix.length - 1 - i]
    );
}

console.log(antiDiagonal);

// 76. Flatten 2D array
const flat = matrix.flat();

console.log(flat);

// 77. Flatten manually
const manualFlat = [];

for (const row of matrix) {
    for (const value of row) {
        manualFlat.push(value);
    }
}

console.log(manualFlat);

// 78. Rotate matrix
const rotated = matrix[0].map((_, index) =>
    matrix.map(row => row[index]).reverse()
);

console.log(rotated);

// 79. Find row sums
const rowSums = matrix.map(row =>
    row.reduce((sum, value) => sum + value, 0)
);

console.log(rowSums);

// 80. Find column sums
const columnSums = [];

for (let col = 0; col < matrix[0].length; col++) {
    let sum = 0;

    for (let row = 0; row < matrix.length; row++) {
        sum += matrix[row][col];
    }

    columnSums.push(sum);
}

console.log(columnSums);
