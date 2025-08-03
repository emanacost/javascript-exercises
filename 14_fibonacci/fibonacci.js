const fibonacci = function(n) {
    if ( n == "string") {
        n = Number(n);
    } else if ( n < 0) {
        return "OOPS"
    } else if (n == 0 ) {
        return 0;
    } else if (n == 1) {
        return 1
    };
    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
        let next = a + b;
        a = b;
        b = next;
    }
    return b;
};

// Do not edit below this line
module.exports = fibonacci;
