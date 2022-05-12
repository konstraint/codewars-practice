let str = '(()) ( ( ()() ) () )';

function validParentheses(parens) {
    const regex = /\(\)/;
    let parenthes = parens.search(regex);
    let arrParens = parens.split('');

    while (parenthes !== -1) {
        arrParens.splice(parenthes, 2);
        parens = arrParens.join('');
        parenthes = parens.search(regex);
    }

    return parens.length === 0;
}

str = '(())((()())())';
console.log('given str =', str);
console.log('isValid:', validParentheses(str));

str = ')(()))';
console.log('given str =', str);
console.log('isValid:', validParentheses(str));

str = '(';
console.log('given str =', str);
console.log('isValid:', validParentheses(str));