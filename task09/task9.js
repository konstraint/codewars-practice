function getLastDigit(num) {
    return num % 10;
}

function getCiclePow(num) {
    let lastDigit = getLastDigit(num);
    if (lastDigit === 1 || lastDigit === 0) {
        return 1;
    }
    let cicle = 2;
    num = lastDigit ** cicle;
    while (getLastDigit(num) !== lastDigit) {
        num = lastDigit ** ++cicle;
    }
    return --cicle;
}

function modular_pow(base, exp, mod) {
    let c = 1
    for (let i = 1; i <= exp; i++) {
        c = (c * base) % mod;
    }      
    return c
}

function lastDigit(as) {
    as[0] = getLastDigit(as[0]);
    let count = 0;
    let baseOfDegree = as[count++];
    let expOfDegree = as[count++];
    while (count < as.length) {
        count++;
    }
    let baseCicle = getCiclePow(baseOfDegree);
    let lastDigitDegree = getLastDigit(getLastDigit(baseOfDegree) ** (expOfDegree % baseCicle));
}



console.log(modular_pow(4, 5, 4)); //0
console.log(modular_pow(3, 4-0, 4)); //1
console.log(2 ** modular_pow(3, 4-0, 4)); //2
console.log('------------------------');

console.log(modular_pow(3, 7, 4)); //3
console.log(2 ** modular_pow(3, 7, 4)); //8
console.log('------------------------');

console.log(modular_pow(30, 21, 4)); //0
console.log(2 ** 4-modular_pow(30, 21, 4)); //16
console.log('------------------------');

console.log(modular_pow(6, 21, 4)); //0
console.log(7 ** 4-modular_pow(6, 21, 4)); //8
console.log('------------------------');

console.log(getCiclePow(0));
console.log(getCiclePow(1));
console.log(getCiclePow(2));
console.log(getCiclePow(3));
console.log(getCiclePow(4));
console.log(getCiclePow(5));
console.log(getCiclePow(6));
console.log(getCiclePow(7));
console.log(getCiclePow(8));
console.log(getCiclePow(9));