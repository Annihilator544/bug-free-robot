const repeatString = function(Word, num) {
    let str=Word;
    if(num<0){
        return 'ERROR';
    }
    Word='';
    for(let i=0;i<num;i++){
        Word += str;
    }
    
    return Word;
};

// Do not edit below this line
module.exports = repeatString;
