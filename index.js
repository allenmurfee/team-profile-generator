const inquirer = require("inquirer");
const fs = require("fs");
const employee = require("./lib/employee");
const engineer = require("./lib/engineer");
const intern = require("./lib/intern");
const manager = require("./lib/manager");

const questions = [
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

function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        if (questions.next === "Add engineer") {
            return 
        }
    }
    )}
