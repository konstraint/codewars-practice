var recoverSecret = function(triplets) { 
    let secretString = '';

    return function getSecretString() {  
        let firstChar = '';
        for (let i = 0; i < triplets.length; i++) {     // проход по массиву массивов троек
            let flag = true; 
            firstChar = triplets[i][0];
            for (let j = 0; j < triplets.length; j++) {     // определяем встречается ли первый символ тройки в каждой тройке на первой позицции
                if (triplets[j].lastIndexOf(firstChar) > 0) {
                    flag = false;
                    break;
                }
            }

            if (!flag) {
                continue;
            } else {
                break;
            }
        }
    
        for (let i = 0; i < triplets.length; i++) {     // во всех тройках удаляем символ, который встречается везде только на первой позиции
            if (triplets[i][0] === firstChar) {
                triplets[i].splice(0, 1);
            }
        }
    
        for (let i = 0; i < triplets.length; i++) {  // удаляем пустые массивы, где исчерпаны все символы из троек
            if (triplets[i].length === 0) {
                triplets.splice(i, 1);
                i--;
            }
        }

        secretString += firstChar;

        if (triplets.length === 0) {
            return secretString;
        }  

        return getSecretString();
    }()
}

let triplets1 = [
    [ 't', 's', 'f' ],
    [ 'a', 's', 'u' ],
    [ 'm', 'a', 'f' ],
    [ 'a', 'i', 'n' ],
    [ 's', 'u', 'n' ],
    [ 'm', 'f', 'u' ],
    [ 'a', 't', 'h' ],
    [ 't', 'h', 'i' ],
    [ 'h', 'i', 'f' ],
    [ 'm', 'h', 'f' ],
    [ 'a', 'u', 'n' ],
    [ 'm', 'a', 't' ],
    [ 'f', 'u', 'n' ],
    [ 'h', 's', 'n' ],
    [ 'a', 'i', 's' ],
    [ 'm', 's', 'n' ],
    [ 'm', 's', 'u' ]
];

console.log(recoverSecret(triplets1));

