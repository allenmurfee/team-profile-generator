const inquirer = require("inquirer");
const fs = require("fs");
const employee = require("./lib/employee");
const engineer = require("./lib/engineer");
const intern = require("./lib/intern");
const manager = require("./lib/manager");
const generate = require("./generate");

function start(questions) {
  inquirer.prompt(questions).then((answers) => {
    if (answers.next === "Add engineer") {
      return start(engineer.engineerQuestions);
    } else if (answers.next === "Add intern") {
      return start(intern.internQuestions);
    } else {
      write("./dist/index.html", answers);
    }
  });
}

function write(fileName, answers) {
  return fs.writeFile(fileName, generate(answers), (err) => {
    return err ? console.log("Error.") : console.log("Success!");
  });
}

start(manager.managerQuestions);
