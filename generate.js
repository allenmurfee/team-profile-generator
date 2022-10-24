const index = require("./index");
const fs = require("fs");

function generateCards(answers) {
  var team = JSON.parse(answers);
  var engineerCards = [];
  var internCards = [];
  var isManager = team.filter((key) => key.managerOfficeNum);
  console.log(isManager);
  var isEng = team.filter((key) => key.engineerGitHub);
  // console.log(isEng);
  var isInt = team.filter((key) => key.internSchool);
  // console.log(isInt);
  var managerCard = `<div class="card col-4" style="width: 18rem">
               <h3>${isManager.name}</h3>
               <div class="card-body">
                 <h5 class="card-title"></h5>
                 <ul class="list-group list-group-flush">
                     <li class="list-group-item">ID: ${isManager.id}</li>
                     <li class="list-group-item">Email: ${isManager.email}</li>
                     <li class="list-group-item">Office number: ${isManager.managerOfficeNum}</li>
                   </ul>
               </div>
             </div>`;

  if (isEng.length >= 1) {
    for (let i = 0; i < isEng.length; i++) {
      // console.log(isEng[i].name)
      engineerCards.push(`<div class="card col-4" style="width: 18rem">
    <h3>${isEng[i].name}</h3>
    <div class="card-body">
      <h5 class="card-title"></h5>
      <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${isEng[i].id}</li>
          <li class="list-group-item">Email: ${isEng[i].email}</li>
          <li class="list-group-item">GitHub: ${isEng[i].engineerGitHub}</li>
        </ul>
    </div>
  </div>`);
    }
  }
  if (isInt.length >= 1) {
    console.log("intern if working");
    for (let i = 0; i < isInt.length; i++) {
      internCards.push(`<div class="card col-4" style="width: 18rem">
      <h3>${isInt[i].name}</h3>
      <div class="card-body">
        <h5 class="card-title"></h5>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${isInt[i].id}</li>
            <li class="list-group-item">Email: ${isInt[i].email}</li>
            <li class="list-group-item">School: ${isInt[i].internSchool}</li>
          </ul>
      </div>
    </div>`);
    }
  }

  var html = `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
        crossorigin="anonymous"
      />
      <title>Team Profiles</title>
    </head>
    <body>
      <header>
          <div class="jumbotron text-center">
              <h1 class="display-4">Team Profiles</h1>
              <p class="lead">Here's our team information!</p>
            </div>
      </header>

      <main>
        <div class="container-fluid">
          <div class="row">
              ${managerCard}
              ${engineerCards}
              ${internCards}
          </div>
        </div>
      </main>

      <script
        src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js"
        integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
        crossorigin="anonymous"
      ></script>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-Fy6S3B9q64WdZWQUiU+q4/2Lc9npb8tCaSX9FK7E8HnRr0Jz8D6OP9dO5Vg3Q9ct"
        crossorigin="anonymous"
      ></script>
    </body>
  </html>`;

  console.log(html);

  write("new.html", html);
}

function write(fileName, answers) {
  return fs.writeFile(fileName, answers, (err) => {
    return err ? console.log("Error.") : console.log("Success!");
  });
}

module.exports = { generateCards };
