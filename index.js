const inquirer = require("inquirer");
const fs = require("fs");
const employee = require("./lib/employee");
const engineer = require("./lib/engineer");
const intern = require("./lib/intern");
const manager = require("./lib/manager");
const generate = require("./generate");

let questionAnswers = [];
let firstQuestion = true;

function start(questions) {
  inquirer.prompt(questions).then((answers) => {
    if (firstQuestion) {
      firstQuestion = false;
      questionAnswers.push(
        new Manager(
          answers.managerName,
          answers.managerID,
          answers.managerEmail,
          answers.managerOfficeNum
        )
      );
      if (answers.next === "Add engineer") {
        return start(engineer.engineerQuestions);
      } else if (answers.next === "Add intern") {
        return start(intern.internQuestions);
      }
    } else if (answers.next === "Add engineer") {
      questionAnswers.push(
        new Engineer(
          answers.engineerName,
          answers.engineerID,
          answers.engineerEmail,
          answers.engineerGitHub
        )
      );
      return start(engineer.engineerQuestions);
    } else if (answers.next === "Add intern") {
      questionAnswers.push(
        new Intern(
          answers.internName,
          answers.internID,
          answers.internEmail,
          answers.internSchool
        )
      );
      return start(intern.internQuestions);
    } else {
      write("./dist/new.html", questionAnswers);
    }
  });
}

function write(fileName, answers) {
  return fs.writeFile(fileName, generate.generateCards(answers), (err) => {
    return err ? console.log("Error.") : console.log("Success!");
  });
}

start(manager.managerQuestions);
