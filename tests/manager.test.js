const manager = require("../lib/manager");

describe("Manager", () => {
    it("should return the name, ID, email, and office number of an manager", () => {
        const testName = "Allen";
        const testId = "1";
        const testEmail = "email@email.com";
        const testOffice = "2";
        const inst = new manager.Manager(testName, testId, testEmail, testOffice);
    
        const resultName = inst.name;
        const resultId = inst.id;
        const resultEmail = inst.email;
        const resultOffice = inst.managerOfficeNum;
    
        expect(resultName).toEqual(testName);
        expect(resultId).toEqual(testId);
        expect(resultEmail).toEqual(testEmail);
        expect(resultOffice).toEqual(testOffice);
      });
      it("should return the role of a manager using getRole()", () => {
        const inst = new manager.Manager("", "", "", "");

        const roleMethod = inst.getRole();

        expect("Manager").toEqual(roleMethod);
      });
  });