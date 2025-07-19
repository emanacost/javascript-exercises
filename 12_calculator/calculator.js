const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
	return arr.reduce( (sum, current) => sum + current, 0);
};

const multiply = function(arr) {
  return arr.reduce( (val, current) => val * current);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(a) {
	if (a == 0){
    return 1
  };
  let facto = [];
  while ( a > 0) {
    facto.push(a);
    a--;
  };
  return facto.reduce( (val, current) => val * current);
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
