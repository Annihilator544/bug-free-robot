function insert(num){
    document.querySelector('.display').innerHTML+=num;
}
function clearDisplay(){
    document.querySelector('.display').innerHTML="";
}
function backspace(){
    var exp = document.querySelector('.display').innerHTML;
    document.querySelector('.display').innerHTML=exp.substring(0,exp.length-1);    
}
function calculate(){
    var exp = document.querySelector('.display').innerHTML;
    if(exp){
        document.querySelector('.display').innerHTML=eval(exp);
    }
}