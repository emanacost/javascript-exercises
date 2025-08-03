const findTheOldest = function(a) {
    // For loop that checks each time if the current person is the oldest so far
        // If yes store that person in a string; loop
        // If no loop
    result = '';
    oldest = 0;
    a.forEach(obj => {
        if ( "yearOfDeath" in obj) {
            age = obj.yearOfDeath - obj.yearOfBirth;
            if ( age > oldest) {
                oldest = age;
                result = obj;
            };        
        } else {
            age = year - obj.yearOfBirth;
            if ( age > oldest) {
                oldest = age;
                result = obj;
            };  
        };
    });
    return result;
    };

const date = new Date();
const year = date.getFullYear();

// Do not edit below this line
module.exports = findTheOldest;
