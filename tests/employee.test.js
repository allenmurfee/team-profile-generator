const Employee = require("../lib/employee");

describe("Employee", () => {
  it("should return the name, ID, and email of an employee", () => {
    const testName = "Allen";
    const testId = "1";
    const testEmail = "email@email.com";
    const inst = new Employee(testName, testId, testEmail);

    const resultName = inst.name;
    const resultId = inst.id;
    const resultEmail = inst.email;

    expect(resultName).toEqual(testName);
    expect(resultId).toEqual(testId);
    expect(resultEmail).toEqual(testEmail);
  });
  it("should return the name, ID, email, and role of an employee using getName(), getId(), getEmail(), and getRole()", () => {
    const testName = "Allen";
    const testId = "1";
    const testEmail = "email@email.com";
    const inst = new Employee(testName, testId, testEmail);

    const resultName = inst.name;
    const resultId = inst.id;
    const resultEmail = inst.email;
    const nameMethod = inst.getName();
    const idMethod = inst.getId();
    const emailMethod = inst.getEmail();
    const roleMethod = inst.getRole();

    expect(resultName).toEqual(nameMethod);
    expect(resultId).toEqual(idMethod);
    expect(resultEmail).toEqual(emailMethod);
    expect("Employee").toEqual(roleMethod);
  });
});
