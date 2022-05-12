function firstNonRepeatingLetter(s) {

    // for (let i = 0; i < s.length; i++) {
    //     const array = [...s.toLowerCase().matchAll(s[i].toLowerCase())];
    //     console.log(array);
    //     if (array.length === 1) {
    //         return s[i];
    //     }
    // }

    // let str = s.toLowerCase(), index = 0;
    // while (index < str.length) {
    //     if (str.slice(index + 1).includes(str[index])) {
    //         str = str.replaceAll(str[index], '');
    //         s = s.replaceAll(s[index], '');
    //     } else {
    //         return s[index];
    //     }
    // }


    const letters = s.toLowerCase().split('');

    let obj = {}
    for (let i = 0; i < letters.length; i++) {
        if (obj[letters[i]] === undefined) {
            obj[letters[i]] = {count: 1, index: i}
        }
        else {
            obj[letters[i]].count++;
        }
    }

    for (keys in obj) {
        if (obj[keys].count === 1) {
            return s[obj[keys].index];
        }
    }

    return '';
}

let str = 'streSS';
console.log('str =', str);
console.log('firstNonRepeatingLetter:', firstNonRepeatingLetter(str));

str = 'STresS';
console.log('str =', str);
console.log('firstNonRepeatingLetter:', firstNonRepeatingLetter(str));

str = 'moonmen';
console.log('str =', str);
console.log('firstNonRepeatingLetter:', firstNonRepeatingLetter(str));

str = 'a';
console.log('str =', str);
console.log('firstNonRepeatingLetter:', firstNonRepeatingLetter(str));

str = 'aa';
console.log('str =', str);
console.log('firstNonRepeatingLetter:', firstNonRepeatingLetter(str));
