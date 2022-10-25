const Employee = require("./employee");

class Manager extends Employee {
  constructor(managerName, managerID, managerEmail, managerOfficeNum) {
    super(managerName, managerID, managerEmail);
    this.managerOfficeNum = managerOfficeNum;
  }
  getRole() {
    return "Manager";
  }
}

const managerQuestions = [
  {
    type: "input",
    message: "Enter team manager's name",
    name: "managerName",
  },
  {
    type: "input",
    message: "Enter team manager's ID",
    name: "managerID",
  },
  {
    type: "input",
    message: "Enter team manager's email",
    name: "managerEmail",
  },
  {
    type: "input",
    message: "Enter team manager's office number",
    name: "managerOfficeNum",
  },
  {
    type: "list",
    message:
      "Would you like to add engineer, intern, or finish building your team?",
    name: "next",
    choices: ["Add engineer", "Add intern", "Finish building my team"],
  },
];

module.exports = { managerQuestions, Manager };
