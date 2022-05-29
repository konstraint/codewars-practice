function getLastDigit(num) {
    return num % 10;
}

function getCiclePow(num) {
    let lastDigit = num % 10;

    if (lastDigit === 1 || lastDigit === 0) {
        return 1;
    }

    let cicle = 2;
    num = lastDigit ** cicle;
    while (num % 10 !== lastDigit) {
        num = lastDigit ** ++cicle;
    }

    return --cicle;
}

function modular_pow(base, exp, mod) {
    let c = 1;
    base %= mod;
    exp %= getCiclePow(base);
    for (let i = 1; i <= exp; i++) {
        c = (c * base) % mod;
    }      
    return c
}


function lastDigit(as) {

    function getCiclePow(num) {
        let lastDigit = num % 10;

        if (lastDigit === 1 || lastDigit === 0) {
            return 1;
        }

        let cicle = 2;
        num = lastDigit ** cicle;
        while (num % 10 !== lastDigit) {
            num = lastDigit ** ++cicle;
        }

        return --cicle;
    }

    function modular_pow(base, exp, mod) {
        //console.log('modular_pow: ', base, exp, mod);
        if (exp === 0) {
            return 1;
        }
        let c = 1;
        base %= mod;
        exp = exp % getCiclePow(base) + getCiclePow(base);

        //console.log('modular_pow2: ', base, exp, mod);

        c = Math.pow(base, exp) % mod;    
        return c
    }

    function clearOne() {
        let indexOne = as.indexOf(1);
        if (indexOne >= 0) {
            as.splice(indexOne, as.length);
        }
    }

    function clearZero() {
        let lastIndexZero = as.lastIndexOf(0);
        if (lastIndexZero > 0) {
            as.splice(lastIndexZero - 1, as.length);
        } else if (lastIndexZero === 0) {
            return 0;
        } else {
            return;
        }
        return clearZero();
    }

    if (as.length === 0) {
        return 1;
    }

    as[0] %= 10;

    clearOne();
    clearZero();

    if (as.length === 0) {
        return 1;
    } else if (as.length === 1) {
        return as[0];
    }    

    let lastDigits4 = [6, 4], lastDigits9 = [1, 9];
    if (as[0] === 1 || as[0] === 5 || as[0] === 6) {
        return as[0];
    } else if (as[0] === 4) {
        return lastDigits4[as[1] % 2];
    } else if (as[0] === 9) {
        return lastDigits9[as[1] % 2];
    }

    return function lastPowDigit() {
        //console.log('новый вызов', as);
        let count = as.length - 1;
        let expOfDegree = as[count];
        let baseOfDegree = as[count - 1];
        let cicleBase = getCiclePow(baseOfDegree);
        let mod = 0;

        if (as.length === 2) {
            return modular_pow(baseOfDegree, expOfDegree, 10);
        } 

        cicleBase = getCiclePow(as[count - 2]);
        mod = cicleBase + modular_pow(baseOfDegree, expOfDegree, cicleBase);
        as.splice(as.length - 2, 2, mod);
        //console.log(as);
        return lastPowDigit();
    }()
}

console.log('1a:', lastDigit([2, 0, 1]), 1); //1
console.log('2a:', lastDigit([2, 2, 101, 2]), 6);  //6
console.log('3a:', lastDigit([625703, 43898, 614961, 448629]), 1); //1
console.log('4a:', lastDigit([2147483647, 2147483647, 2147483647, 2147483647]), 3); //3
console.log('5a:', lastDigit([917517, 524775, 103952, 704550]), 3); //3
console.log('------------------------');
console.log('1:', lastDigit([2, 3, 4, 5]), 2);//2
console.log('2:', lastDigit([12, 30, 21]), 6);//6
console.log('3:', lastDigit([7, 3, 13, 2]), 3);//3
console.log('4:', lastDigit([]), 1);//1
console.log('5:', lastDigit([25]), 5);//5
console.log('6:', lastDigit([0]), 0);//0
console.log('7:', lastDigit([0, 0]), 1);//1
console.log('8:', lastDigit([0, 0, 0]), 0);//0
console.log('9:', lastDigit([7, 2, 0, 0, 4, 0, 234, 15]), 9);//9
console.log('10:', lastDigit([3, 4, 5]));//1
console.log('11:', lastDigit([937640, 767456, 981242]), 0);//0
console.log('12:', lastDigit([3, 4, 2]), 1);//1
console.log('13:', lastDigit([2, 2, 2, 0]), 4);//4
console.log('14:', lastDigit([12, 30, 21]), 6);//6
console.log('15:', lastDigit([7, 6, 21]), 1);//1
console.log('16:', lastDigit([4, 3, 6]), 4);//4
console.log('17:', lastDigit([7, 6, 1]), 9);//9

let as = [];
function clearZero() {
    let lastIndexZero = as.lastIndexOf(0);
    if (lastIndexZero > 0) {
        as.splice(lastIndexZero - 1, as.length);
    } else if (lastIndexZero === 0) {
        as.splice(lastIndexZero, as.length);
    } else {
        return;
    }
    console.log(as);
    return clearZero();
}

console.log('------------------------');
clearZero();
console.log(as);