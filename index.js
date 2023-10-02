// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./untils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "license",
    message: "What license would you like to use? (MIT, GPL, etc.)",
  },
  {
    type: "input",
    name: "description",
    message: "Provide a short description of your project:",
  },
  {
    type: "input",
    name: "motive",
    message: "What was the motive for this project?:",
  },
  {
    type: "input",
    name: "solutions",
    message: "What problems does this application solve?:",
  },
  {
    type: "input",
    name: "knowledge",
    message: "What did you learn from this project?:",
  },
  {
    type: "input",
    name: "different",
    message: "what makes this project stand out from others?:",
  },
];

// TODO: Create a function to write README file

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    const readmeContent = generateMarkdown(answers);
    fs.writeFile("README.md", readmeContent, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log("README.md has been successfully created!");
      }
    });
  });
}

// Function call to initialize app
init();
