const sumAll = function(num1, num2) {
    sumArray = [];
    if (typeof(num1) != 'number' ||  typeof(num2) != 'number') {
        return "ERROR"
    } else if (num1 < 0 || num2 < 0) {
        return "ERROR"
    } else if (num1 % 1 != 0 || !num2 % 1 != 0) {
        return "ERROR"
    } else if (num1 < num2) {
        for ( i = num1; i <= num2; i++) {
        sumArray.push(i);
        };
    } else if (num1 > num2) {
        for ( i = num2; i <= num1; i++) {
        sumArray.push(i);
        };        
    }

    return sumArray.reduce(( total, current) => total + current, 0);
};

// Do not edit below this line
module.exports = sumAll;
