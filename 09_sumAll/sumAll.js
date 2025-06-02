const sumAll = function(num1, num2) {
    sumArray = [];
    for ( i = num1; i <= num2; i++) {
        sumArray.push(i);
    };
    return sumArray.reduce(( total, current) => total + current, 0);
};

// Do not edit below this line
module.exports = sumAll;
