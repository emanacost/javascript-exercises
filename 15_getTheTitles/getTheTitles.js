const getTheTitles = function(a) {
    result = [];
    a.forEach(obj => {
        result.push(obj.title);        
    });
    return result;
};

// Do not edit below this line
module.exports = getTheTitles;
