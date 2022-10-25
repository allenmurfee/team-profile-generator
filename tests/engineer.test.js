const engineer = require("../lib/engineer");

describe("Engineer", () => {
    it("should return the name of an engineer", () => {
      const testName = "Allen";
      const inst = new engineer.Engineer(testName);
  
      const result = inst.name;
  
      expect(result).toEqual(testName);
    });
  });