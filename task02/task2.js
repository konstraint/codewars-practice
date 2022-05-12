function getSnail(array) {
    if (array.length === 0 || array[0].length === 0) {
        return result;
    }

    for (let j = 0; j < array.length; j++) {
        result.push(array[0][j]);
    }
    array.shift();

    for (let i = 0; i < array.length; i++) {
        result.push(array[i][array.length]);
        array[i].pop();
    }

    for (let j = array.length - 1; j >= 0; j--) {
        result.push(array[array.length - 1][j]);
    }
    array.pop();

    for (let i = array.length - 1; i >= 0; i--) {
        result.push(array[i][0]);
        array[i].shift();
    }

    return getSnail(array);
}

let array = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log('array = ', array);
let result = [];
console.log(getSnail(array));

array = [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]];
console.log('array = ', array);
result = [];
console.log(getSnail(array));

array = [[1]];
console.log('array = ', array);
result = [];
console.log(getSnail(array));

array = [[]];
console.log('array = ', array);
result = [];
console.log(getSnail(array));

// for (let j = array.length - 2; j >= 0; j--) {
//     result.push(array[array.length - 1][j]);
// }

// for (let i = array.length - 2; i >= 1; i--) {
//     result.push(array[i][0]);
// }

// console.log(array[0]);
// console.log(array[1]);
// console.log(array[2]);

