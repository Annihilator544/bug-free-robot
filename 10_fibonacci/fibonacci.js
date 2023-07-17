const fibonacci = function(num) {
    f0=0;
    f1=1;
    if(num<0){
        return "OOPS";
    }
    else if(num==0){
        return f0;
    }
    else if(num==1){
        return f1;
    }
    else{
        let f2=0;
        for(let i=2;i<=num;i++){
            f2=f0+f1;
            f0=f1;
            f1=f2;
        }
        return f2;
    }
};

// Do not edit below this line
module.exports = fibonacci;
