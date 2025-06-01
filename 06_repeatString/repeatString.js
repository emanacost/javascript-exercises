const repeatString = function(string, num) {
    if (num < 0) {
        return "ERROR"
    }
    result = ""
    for (i = 0; i < num; i++) {
        if (result == 0) {
            result = string;
        } else {
            result = result + string;
        }
    };
    return result;
};

// Do not edit below this line
module.exports = repeatString;
