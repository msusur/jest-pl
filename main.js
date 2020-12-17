const { calculate } = require("./calculate");

module.exports.run = () => {
  const result = calculate(4, 5);

  console.log("4 x 5 = ", result);
};
