const palindromes = function (str) {
    str = str.toLowerCase().replace(/[^a-z]/g, '');
    let rvrstr = str.split('').reverse().join('');
    if (rvrstr == str) {
        return true;
    }
    else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
