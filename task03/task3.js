let array = [1, 0, 0, 3, 2, 1, 0];

console.log(array);

// let indexes = [];
// let ind = array.lastIndexOf(0);
// while (ind !== -1) {
//     indexes.push(ind);
//     ind = array.lastIndexOf(0, ind - 1);
// }

// console.log(indexes);

// for (ind of indexes) {
//     array.push(array.splice(ind, 1)[0]);
// }

// console.log(array);

// function moveZeros(arr) {
//     let indexes = [];
//     let ind = arr.lastIndexOf(0);

//     while (ind !== -1) {
//         indexes.push(ind);
//         ind = arr.lastIndexOf(0, ind - 1);
//     }

//     for (ind of indexes) {
//         arr.push(arr.splice(ind, 1)[0]);
//     }
//     return arr;
// }

function moveZeros(arr) {
    let index = arr.lastIndexOf(0);

    while (index !== -1) {
        arr.push(arr.splice(index, 1)[0]);
        index = arr.lastIndexOf(0, index - 1);
    }

    return arr;
}

console.log(moveZeros(array));