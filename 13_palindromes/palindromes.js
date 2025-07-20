const palindromes = function (a) {
    sentence = a.split('').filter( item => /[a-zA-Z1-9]/.test(item));
    lowerCaseSentence = [];
    sentence.forEach(letter => {
        lowerCaseSentence.push(letter.toLowerCase());        
    });
    console.log(lowerCaseSentence);
    if ( lowerCaseSentence.join('') == lowerCaseSentence.reverse().join('') ) {
        return true;
    } else {
        return false;
    };
};


console.log(palindromes('r3ace3car'));

// Do not edit below this line
module.exports = palindromes;
