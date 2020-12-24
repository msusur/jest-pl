const calculate = (a, b) => a * b;

const add = (a, b) => a + b;

const div = (a,b) => {
       let quotient = a / b;
        if (quotient !== quotient) {  
          throw new Error("Invalid");
        }
        return quotient;
      
}

module.exports = {
    div,
    add,
    calculate
}