var Vineet_MathLib = {
    //Library for simpler mathematics calculations
    version: "1.0.0",
    PI: 3.14159265359,
    sum: (...Values) => {
        let a = 0;
        if (typeof (Values) == 'object') {
            Values.forEach(e => {
                if (typeof (e) == 'number') {
                    a += e;
                }
            }
            )
            return a;
        } else {
            console.error("Value entered is not in form of array.")
        }
    },
    prod: (...Values) => {
        if (Values.length == 0) {
            return 0
        }
        let a = 1;
        if (typeof (Values) == 'object') {
            Values.forEach(e => {
                if (typeof (e) == 'number') {
                    a = a * e;
                }
            }
            )
            return a;
        } else {
            console.error("Value entered is not in form of array.")
        }
    },
    mod: (dividend, divisor) => {
        if (typeof(dividend)=='undefined') {
            return console.error("Dividend cannot be empty");
        }else{
            if (typeof(divisor)=='undefined') {
                return console.error("Dividend cannot be empty");
            }
        }
        return dividend % divisor;
    }
};
