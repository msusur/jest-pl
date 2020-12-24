
const {div, add,calculate} = require("./calculate");

describe("Calculations", () => {
  describe("calculate", () => {
    it("should multiply inputs", () => {
      // Act
      const result = calculate(10, 20);
      
      // Assert
      expect(result).toBe(200);
    });
  });
  describe("add", () => {
    it("should divide numbers", () => {
      // Act
      const result = add(10, 2);

      // Assert
      expect(result).toBe(12);
    });
  });
  describe("div", () => {
    it("should divide numbers", () => {
      // Act
      const result = div(10, 2);

      // Assert
      expect(result).toBe(5);
    });
  });
  describe("div2",() => {
    it("should divide numbers", () => {
      // Act
      const result = div(0, 10);

      // Assert
      expect(result).toBe(0);
    });
  });
  describe("div3",() => {
    it("should divide numbers", () => {
      // Act
      const result = div(10, 0);

      // Assert
      expect(result).toBe(Infinity);
    });
  });
  describe("div4",() => {
    it("should divide numbers", () => {
      // Act
      const result = div(NaN, 0);

      // Assert
      expect(result).toBe("Invalid");
    });
  });
  describe("div5",() => {
    it("should divide numbers", () => {
      // Act
      const result = div(null, 0);

      // Assert
      expect(result).toBe("Invalid");
    });
  });
  describe("div6",() => {
    it("should divide numbers", () => {
      // Act
      const result = div(undefined, 0);

      // Assert
      expect(result).toBe("Invalid");
    });
  });
  describe("div7",() => {
    it("should divide numbers", () => {
      // Act
      const result = div(0, 0);

      // Assert
      expect(result).toBe("Invalid");
    });
  });
});
