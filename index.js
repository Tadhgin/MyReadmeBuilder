// dependencies and variables
const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const generateReadme = require("./utils/generateReadme")
const writeFileAsync = util.promisify(fs.writeFile);

//Prompt the user questions
function promptUser(){
    return inquirer.prompt([
        {
            type: "input",
            name: "projectTitle",
            message: "Add project title?",
        },
        {
            type: "input",
            name: "description",
            message: "Please describe your project: "
        },
        {
            type: "input",
            name: "installation",
            message: "How did you install the project: ",
        },
        {
            type: "input",
            name: "usage",
            message: "Whats the projects usage?"
        },
        {
            type: "list",
            name: "license",
            message: "Choose the license: ",
            choices: [
                "Apache",
                "Academic",
                "GNU",
                "ISC",
                "MIT",
                "Mozilla",
                "Open"
            ]
        },
        {
            type: "input",
            name: "contributing",
            message: "Please credit any co-contributors"
        },
        {
            type: "input",
            name: "tests",
            message: "Any tests performed?"
        },
        {

            type: "input",
            name: "email",
            message: "Please enter your email: "

        }
    ]);
} 

  async function init() {
    try {
        // Ask user questions and generate responses
        const answers = await promptUser();
        const generateContent = generateReadme(answers);
        // Write new README.md to dist directory
        await writeFileAsync('./dist/README.md', generateContent);
        console.log('Successfully wrote to README.md');
    }   catch(err) {
        console.log(err);
    }
  }
  
  init();  