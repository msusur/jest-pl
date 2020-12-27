
const {div, add,calculate} = require("./calculate");

  describe("calculate", () => {
    it("should multiply inputs", () => {
      // Act
      const result = calculate(10, 20);
      
      // Assert
      expect(result).toBe(200);
    });
  });
  describe("add", () => {
    it("should add numbers", () => {
      // Act
      const result = add(10, 2);

      // Assert
      expect(result).toBe(12);
    });
    
    it("should add numbers", () => {
      // Act
      const result = add(11, 2);

      // Assert
      expect(result).toBe(13);
    });

  });
  describe("div", ()=>{
     it("should divide numbers", () => {
      // Act
      const result = div(10, 2);

      // Assert
      expect(result).toBe(5);
    });

      it("should divide numbers", () => {
      // Act
      const result = div(0, 10);

      // Assert
      expect(result).toBe(0);
    });

 
    it("it should be infinity when number divide by 0 ", () => {
      // Act
      const result = div(10, 0);

      // Assert
       expect(result).toBe(Infinity);
    });
 

    it("it should throw error when a non-number dividing 0", () => {
      
      expect(()=>div(NaN, 0)).toThrow();
    });
  
 
    it("it should throw error when non number dividing 0", () => {

      expect(()=>div(null, 0)).toThrow();
    });


    it("it should throw error when non number dividing 0", () => {

      expect(()=>div(undefined, 0)).toThrow();
    });

 
    it("it should throw error", () => {
   
      expect(()=>div(0, 0)).toThrow();
    });

    test("it should throw error when dividing a non-number", () => {
    
      expect(()=>div(15, NaN)).toThrow();
    });

    it("it should throw error when dividing a non number", () => {
    expect(()=>div(15, NaN)).toThrow();
    });
    

    it("it should throw error when dividing a non number", () => {
      expect(() => div(15, NaN)).toThrow();
    });
  });
  
  

