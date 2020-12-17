jest.mock("./calculate");
const calculationMock = require("./calculate");
calculationMock.calculate = jest.fn();
console.log = jest.fn();

const main = require("./main");

describe("main application", () => {
  it("should calculate result of 4 * 5", () => {
    // Arrange
    calculationMock.calculate.mockReturnValue("Pikachu");

    // Act
    main.run();

    // Assert
    expect(console.log).toBeCalledWith("4 x 5 = ", "Pikachu");
    expect(calculationMock.calculate).toBeCalledWith(4, 5);
  });
});
