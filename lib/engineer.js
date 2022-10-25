const Employee = require("./employee");
class Engineer extends Employee {
  constructor(engineerName, engineerID, engineerEmail, engineerGitHub) {
    super(engineerName, engineerID, engineerEmail);
    this.engineerGitHub = engineerGitHub;
  }
  getGithub() {
    return this.engineerGitHub;
  }
  getRole() {
    return "Engineer";
  }
}

const engineerQuestions = [
  {
    type: "input",
    message: "Enter engineer's name",
    name: "engineerName",
  },
  {
    type: "input",
    message: "Enter engineer's ID",
    name: "engineerID",
  },
  {
    type: "input",
    message: "Enter engineer's email",
    name: "engineerEmail",
  },
  {
    type: "input",
    message: "Enter engineer's GitHub username",
    name: "engineerGitHub",
  },
  {
    type: "list",
    message:
      "Would you like to add engineer, intern, or finish building your team?",
    name: "next",
    choices: ["Add engineer", "Add intern", "Finish building my team"],
  },
];

module.exports = { engineerQuestions, Engineer };
