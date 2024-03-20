const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

const questions = [
    {
        type: "input",
        name: "managerName",
        message: "What's the team manager's name?",
    },
    {
        type: "input",
        name: "managerId",
        message: "What's the team manager's ID?",
    },
    {
        type: "input",
        name: "managerEmail",
        message: "What's the team manager's email?",
    },
    {
        type: "input",
        name: "managerOfficeNumber",
        message: "What's the team manager's office number?",
    },
    //stopping here in case they pick "none"
    {
        type: "list",
        name: "addMember",
        message: "What type of team member would you like to add?",
        choices: ["Engineer", "Intern", "None"]
    },
]