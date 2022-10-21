const inquirer = require("inquirer");
const fs = require("fs");
const employee = require("./lib/employee");
const engineer = require("./lib/engineer");
const intern = require("./lib/intern");
const manager = require("./lib/manager");

function init(questions) {
  inquirer.prompt(questions).then((answers) => {
    if (answers.next === "Add engineer") {
      return init(engineer.engineerQuestions);
    } else if (answers.next === "Add intern") {
      return init(intern.internQuestions);
    } else {
        return 
    }
  })
}

init(manager.managerQuestions);
