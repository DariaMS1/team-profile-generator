//new attempt THIS ONE WORKS
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

let team = [];

const managerArr = [
    {
        type: "input",
        name: "managerName",
        message: "What's the team manager's name?"
    },
    {
        type: "input",
        name: "managerId",
        message: "What's the team manager's ID?"
    },
    {
        type: "input",
        name: "managerEmail",
        message: "What's the team manager's email?"
    },
    {
        type: "input",
        name: "managerOfficeNumber",
        message: "What's the team manager's office number?"
    }
];

var addMemberArr = [
    {
        type: "list",
        name: "memberType",
        message: "What type of team member would you like to add?",
        choices: ["Engineer", "Intern", "None"]
    }
];

var engineerArr = [
    {
        type: "input",
        name: "memberName",
        message: "What's the engineer's name?"
    },
    {
        type: "input",
        name: "memberId",
        message: "What's the engineer's ID?"
    },
    {
        type: "input",
        name: "memberEmail",
        message: "What's the engineer's email?"
    },
    {
        type: "input",
        name: "memberGithub",
        message: "What's the engineer's GitHub?"
    }
];

var internArr = [
    {
        type: "input",
        name: "memberName",
        message: "What's the intern's name?"
    },
    {
        type: "input",
        name: "memberId",
        message: "What's the intern's ID?"
    },
    {
        type: "input",
        name: "memberEmail",
        message: "What's the intern's email?"
    },
    {
        type: "input",
        name: "memberSchool",
        message: "What's the intern's school?"
    }
];

const addMember= () => {
    inquirer
        .prompt(addMemberArr)
        .then((answers) => {
            //checking to see if they wish to continue
            if (answers.memberType === "None") {
                console.log("Saved details.");
                return;
            } 
            //pushing specific engineer question
            else if (answers.memberType === "Engineer") {
                inquirer
                .prompt(engineerArr)
                .then((answers) => {
                    console.log("Saved details.");
                    let engineer = new Engineer(data.name, data.email, data.github);
                    team.push(engineer);
                    addMember();
                })
                .catch((error) => {
                    if (error.isTtyError) {
                        console.log(error)
                    } else {
                        console.log(error)
                    }
                });
            }
            //pushing specific intern question
            else if (answers.memberType === "Intern") {
                inquirer
                .prompt(internArr)
                .then((answers) => {
                    console.log("Saved details.");
                    let intern = new Intern(data.name, data.email, data.school);
                    team.push(intern);
                    addMember();
                })
                .catch((error) => {
                    if (error.isTtyError) {
                        console.log(error)
                    } else {
                        console.log(error)
                    }
                });
            
            }})
        .catch((error) => {
            if (error.isTtyError) {
                console.log(error)
            } else {
                console.log(error)
            }
        });
}

// const inquirerManager = () => {
//     inquirer
//         .prompt(managerArr)
//         .then((answers) => {
//             console.log("Saved details.");
//             let manager = new Manager(data.name, data.email, data.office);
//             team.push(manager)
//             addMember();
//         })
//         .catch((error) => {
//             if (error.isTtyError) {
//                 console.log(error)
//             } else {
//                 console.log(error)
//             }
//         });
//     addMember();
// }
// 
// inquirerManager();