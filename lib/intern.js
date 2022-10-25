const Employee = require("./employee");

class Intern extends Employee {
  constructor(internName, internID, internEmail, internSchool) {
    super(internName, internID, internEmail);
    this.internSchool = internSchool;
  }
  getSchool() {
    return this.internSchool;
  }
  getRole() {
    return "Intern";
  }
}

const internQuestions = [
  {
    type: "input",
    message: "Enter intern's name",
    name: "internName",
  },
  {
    type: "input",
    message: "Enter intern's ID",
    name: "internID",
  },
  {
    type: "input",
    message: "Enter intern's email",
    name: "internEmail",
  },
  {
    type: "input",
    message: "Enter intern's school",
    name: "internSchool",
  },
  {
    type: "list",
    message:
      "Would you like to add engineer, intern, or finish building your team?",
    name: "next",
    choices: ["Add engineer", "Add intern", "Finish building my team"],
  },
];

module.exports = { internQuestions, Intern };
