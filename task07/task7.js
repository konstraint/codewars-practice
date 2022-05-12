const obgDigitDirection = {
    '1': ['1', '2', '4'],
    '2': ['1', '2', '3', '5'],
    '3': ['2', '3', '6'],
    '4': ['1', '4', '5', '7'],
    '5': ['2', '4', '5', '6', '8'],
    '6': ['3', '5', '6', '9'],
    '7': ['4', '7', '8'],
    '8': ['5', '7', '8', '9', '0'],
    '9': ['6', '8', '9'],
    '0': ['8', '0']
}

let listPins = [];

function getPINs(observed) {
    let str = '';
    console.log(observed.length);
    for (let i = 0; i < observed.length; i++) {
        for (elem of obgDigitDirection[observed[i]]) {
            console.log(getPINs(observed.slice(1)));
            str = elem + getPINs(observed.slice(1));
            listPins.push(str);
        }   
    }
    return listPins;
}

console.log(getPINs('5'));


