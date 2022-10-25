const intern = require("../lib/intern");

describe("Intern", () => {
  it("should return the name, ID, email, and school of an intern", () => {
    const testName = "Allen";
    const testId = "1";
    const testEmail = "email@email.com";
    const testSchool = "school";
    const inst = new intern.Intern(testName, testId, testEmail, testSchool);

    const resultName = inst.name;
    const resultId = inst.id;
    const resultEmail = inst.email;
    const resultSchool = inst.internSchool;

    expect(resultName).toEqual(testName);
    expect(resultId).toEqual(testId);
    expect(resultEmail).toEqual(testEmail);
    expect(resultSchool).toEqual(testSchool);
  });
  it("should return the school and role of an intern using getSchool() and getRole()", () => {
    const testSchool = "school";
    const inst = new intern.Intern("", "", "", testSchool);

    const resultSchool = inst.internSchool;

    const schoolMethod = inst.getSchool();
    const roleMethod = inst.getRole();

    expect(resultSchool).toEqual(schoolMethod);
    expect("Intern").toEqual(roleMethod);
  });
});
