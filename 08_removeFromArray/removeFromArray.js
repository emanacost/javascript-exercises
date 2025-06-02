const removeFromArray = function(arr, ...rm) {
    rm.forEach(rm => {
    rmVal = arr.indexOf(rm);
    arr.splice(rmVal, 1);
    });
    return arr; 
};

// Do not edit below this line
module.exports = removeFromArray;
