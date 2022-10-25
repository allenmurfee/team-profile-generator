const manager = require("../lib/manager");

describe("Engineer", () => {
    it("should return the name of a manager", () => {
      const testName = "Allen";
      const inst = new manager.Manager(testName);
  
      const result = inst.name;
  
      expect(result).toEqual(testName);
    });
  });