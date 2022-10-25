const inquirer = require("inquirer");
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
        new manager.Manager(
          answers.managerName,
          answers.managerID,
          answers.managerEmail,
          answers.managerOfficeNum
        )
      );
      if (answers.next === "Add engineer") {
        start(engineer.engineerQuestions);
      } else if (answers.next === "Add intern") {
        start(intern.internQuestions);
      } else {
        generate.generateCards(JSON.stringify(questionAnswers));
      }
    }
    if (answers.engineerGitHub) {
      questionAnswers.push(
        new engineer.Engineer(
          answers.engineerName,
          answers.engineerID,
          answers.engineerEmail,
          answers.engineerGitHub
        )
      );
      if (answers.next === "Add engineer") {
        start(engineer.engineerQuestions);
      } else if (answers.next === "Add intern") {
        start(intern.internQuestions);
      } else {
        generate.generateCards(JSON.stringify(questionAnswers));
      }
    } else if (answers.internSchool) {
      questionAnswers.push(
        new intern.Intern(
          answers.internName,
          answers.internID,
          answers.internEmail,
          answers.internSchool
        )
      );
      if (answers.next === "Add engineer") {
        start(engineer.engineerQuestions);
      } else if (answers.next === "Add intern") {
        start(intern.internQuestions);
      } else {
        generate.generateCards(JSON.stringify(questionAnswers));
      }
    }
  });
}

//Prompt questions
start(manager.managerQuestions);
