const repeatString = function(string, num) {
    result = ""
    for (i = 0; i < num; i++) {
        if (result == 0) {
            result = string;
        } else {
            result = result + string;
        }
    }
};

// Do not edit below this line
module.exports = repeatString;
