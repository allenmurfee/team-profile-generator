const Employee = require("../lib/employee");

describe("Employee", () => {
  it("should return the name of an employee", () => {
    const testName = "Allen";
    const inst = new Employee(testName);

    const result = inst.name;

    expect(result).toEqual(testName);
  });
});
