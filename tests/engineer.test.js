const engineer = require("../lib/engineer");

describe("Engineer", () => {
  it("should return the name, ID, email, and GitHub of an engineer", () => {
    const testName = "Allen";
    const testId = "1";
    const testEmail = "email@email.com";
    const testGithub = "username";
    const inst = new engineer.Engineer(testName, testId, testEmail, testGithub);

    const resultName = inst.name;
    const resultId = inst.id;
    const resultEmail = inst.email;
    const resultGithub = inst.engineerGitHub;

    expect(resultName).toEqual(testName);
    expect(resultId).toEqual(testId);
    expect(resultEmail).toEqual(testEmail);
    expect(resultGithub).toEqual(testGithub);
  });
  it("should return the GitHub and role of an engineer using getGithub() and getRole()", () => {
    const testGithub = "username";
    const inst = new engineer.Engineer("", "", "", testGithub);

    const resultGithub = inst.engineerGitHub;
    const githubMethod = inst.getGithub();
    const roleMethod = inst.getRole();

    expect(resultGithub).toEqual(githubMethod);
    expect("Engineer").toEqual(roleMethod);
  });
});
