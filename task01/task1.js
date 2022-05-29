// факториальная система счисления
function dec2FactString(nb) {

    function factorial(num) { return (num === 1 || num === 0) ? 1 : num * factorial(num - 1);}

    let floorFactorial = function(num) {
        let floorFact = 1;
        while (factorial(floorFact) <= num) {
            floorFact++;
        }
        return --floorFact;
    };

    let result = [];
    let maxFactor = floorFactorial(nb);
    for (let i = 0; i < maxFactor; i++) {
        result[i] = 0;
    }

    return function getFactors() {

        if (nb === 0) {
            return result;
        }

        maxFactor = floorFactorial(nb);
        let factor = Math.floor(nb / factorial(maxFactor));
        result[maxFactor] = factor < 10 ? factor : String.fromCharCode((factor + 55));

        nb = nb - factor * factorial(maxFactor);

        return getFactors();
    }().reverse().join('');
}

function factString2Dec(str) {

    function factorial(num) { return (num === 1 || num === 0) ? 1 : num * factorial(num - 1);}

	let symbols = str.split('').reverse();
    let result = 0;
    for (let i = 0; i < symbols.length; i++) {
        result += factorial(i) * (isNaN(Number(symbols[i])) ? symbols[i].charCodeAt(0) : Number(symbols[i]));
    }
	return result;
}

// console.log(dec2FactString(463));
// console.log(dec2FactString(250));
// console.log(dec2FactString(1));
// console.log(dec2FactString(2982));
console.log(dec2FactString(120));

console.log(factString2Dec('341010'));
