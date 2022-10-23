const index = require("./index");

function generateCards(answers) {
  console.log(answers);
  let managerCard = `<div class="card" style="width: 18rem">
              <h3>${answers.Manager.name}</h3>
              <div class="card-body">
                <h5 class="card-title"></h5>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${answers.Manager.id}</li>
                    <li class="list-group-item">Email: ${answers.Manager.email}</li>
                    <li class="list-group-item">Office number: ${answers.Manager.managerOfficeNum}</li>
                  </ul>
              </div>
            </div>`;
  var engineerCards = [];
  var internCards = [];
  for (let i = 0; i < answers.length; i++) {
    engineerCards[i] = `<div class="card" style="width: 18rem">
    <h3>${answers.Engineer.name}</h3>
    <div class="card-body">
      <h5 class="card-title"></h5>
      <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${answers.Engineer.id}</li>
          <li class="list-group-item">Email: ${answers.Engineer.email}</li>
          <li class="list-group-item">GitHub: ${answers.Engineer.engineerGitHub}</li>
        </ul>
    </div>
  </div>`;
    internCards[i] = `<div class="card" style="width: 18rem">
    <h3>${answers.Intern.name}</h3>
    <div class="card-body">
      <h5 class="card-title"></h5>
      <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${answers.Intern.id}</li>
          <li class="list-group-item">Email: ${answers.Intern.email}</li>
          <li class="list-group-item">School: ${answers.Engineer.internSchool}</li>
        </ul>
    </div>
  </div>`;
  }
};

module.exports = { generateCards };
