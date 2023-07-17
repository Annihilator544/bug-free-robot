const add = function(num1,num2) {
	return num1 + num2;
};

const subtract = function(num1,num2) {
	return num1 - num2;
};

const sum = function(array) {
  let num = 0;
	for(let i=0;i<array.length;i++){
    num += array[i];
  }
  return num;
};

const multiply = function(...args) {
  let num1 =1;
  for(let i=0;i<args.length;i++){
    num1 *= args[i];
  }
  return num1 ;
};

const power = function(num1,num2) {
	let num = num1;
  for(let i=1;i<num2;i++){
    num*=num1;
  }
  return num;
};

const factorial = function(num1) {
	let prod=1;
  for(let i=1;i<=num1;i++){
    prod*=i;
  }
  return prod;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
