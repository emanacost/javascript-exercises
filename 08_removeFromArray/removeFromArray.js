const removeFromArray = function(arr, rm) {
    rmVal = arr.indexOf(rm);
    return arr.splice(rmVal, 1);
};

// Do not edit below this line
module.exports = removeFromArray;
