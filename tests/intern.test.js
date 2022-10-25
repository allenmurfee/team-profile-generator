const intern = require("../lib/intern");

describe("Engineer", () => {
    it("should return the name of a intern", () => {
      const testName = "Allen";
      const inst = new intern.Intern(testName);
  
      const result = inst.name;
  
      expect(result).toEqual(testName);
    });
  });