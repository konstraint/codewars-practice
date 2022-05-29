function getPINs(observed) {

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

    let arrayPins = [observed];
    let count = 0;

    return function getPINsCombinations() {

        if (count === observed.length) {
            return arrayPins;
        }

        // каждый раз проходим по списку пин-кодов и для каждого из них строим комбинации
        for (let i = 0; i < arrayPins.length; i++) {
            let arrayOfDigits = obgDigitDirection[arrayPins[i][count]]; // массив соседних с обрабатываемой цифрой
            let j = 0;
            for (j = 0; j < arrayOfDigits.length; j++) {
                // двигаем в исходном массиве строчку, которую хотим перебирать
                // обрезаем до нужного символа, соответствующего итерации
                // добавляем цифру-соседа из списка соседних для обрабатываемой цифры
                // добавляем остаток строки
                arrayPins.splice(i, 0, arrayPins[i].substring(0, count)  + arrayOfDigits[j] + arrayPins[i].substring(count + 1));
            }
            i += j;
            arrayPins.splice(i, 1);
            i--;
        }
        count++;

        return getPINsCombinations();
    }()
}

console.log(getPINs('5'));
console.log(getPINs('11'));
console.log(getPINs('369'));


