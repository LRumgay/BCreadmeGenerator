// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const markdown = require("./generatemarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type:"input",
        name:"title",
        message:"what is the title of your project"
    },
    {
        type:"input",
        name:"github",
        message:"please enter your github link or username"
    },
    {
        type:"input",
        name:"email",
        message:"what is your email",
    },
    {
        type:"input",
        name:"installation",
        message:"describe how to install your application",
    },
    {
        type:"input",
        name:"usage",
        message:"what should the user know about this project",
    },
    {
        type:"list",
        name:"license",
        message:"what kind of license does the project have",
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
    },
    {
        type:"input",
        name:"contributing",
        message:"is there anything need to be known about contributing to this project"
    },
    {
        type:"input",
        name:"features",
        message:"if your project has a lot of features please list them here"
    },

]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(),fileName),data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers)=>{
        writeToFile("readme.md",markdown({...answers}))
    })
}

// Function call to initialize app
init();
