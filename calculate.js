const calculate = (a, b) => a * b;

const add = (a, b) => a + b;

const div = (a,b) => {
       var quotient = a / b;
        if (quotient !== quotient) {  
            return "Invalid"
        }
        return quotient;
      
}

module.exports = {
    div,
    add,
    calculate
}