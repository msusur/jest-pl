const calculations = require("./calculate");

describe("Calculations", () => {
  describe("calculate", () => {
    it("should multiply inputs", () => {
      // Act
      const result = calculations.calculate(10, 20);
      
      // Assert
      expect(result).toBe(200);
    });
  });
  describe("div", () => {
    it("should divide numbers", () => {
      // Act
      const result = calculations.div(10, 2);

      // Assert
      expect(result).toBe(5);
    });
  });
});
