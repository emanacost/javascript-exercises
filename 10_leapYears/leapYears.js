// Leap years are  devisable by 4
// but not 100
// but 400 is ok

const leapYears = function(year) {
    if (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0) ) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
