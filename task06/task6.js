console.log(parseInt('211', 16));
console.log(parseInt("FXX123", 16));


function base16(num) {
    let str16 = '';

    if (num <= 0) {
         return '00';
    } else if (num >= 256) {
        return 'FF';
    }

    do {
        r = num % 16;
        if (r >= 10) {
            r = String.fromCharCode((r + 55));
        }
        str16 += r;
        num = Math.floor(num / 16) 
    }while(num !== 0)

    if (str16.length === 1) {
        str16 += '0';
    }

    return str16.split('').reverse().join('');
}

let num = 146
console.log('num =', num);
console.log('base16 =', base16(num));

num = 84
console.log('num =', num);
console.log('base16 =', base16(num));

num = 14;
console.log('num =', num);
console.log('base16 =', base16(num));

num = 16;
console.log('num =', num);
console.log('base16 =', base16(num));

num = -20;
console.log('num =', num);
console.log('base16 =', base16(num));

num = 255;
console.log('num =', num);
console.log('base16 =', base16(num));

num = 300;
console.log('num =', num);
console.log('base16 =', base16(num));