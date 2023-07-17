const reverseString = function(str) {
    let rvrstr='';
    for(let i=str.length-1;i>=0;i--){
        rvrstr+=str[i];
    }
    return rvrstr;
};

// Do not edit below this line
module.exports = reverseString;
