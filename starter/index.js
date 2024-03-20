// const Manager = require("./lib/Manager");
// const Engineer = require("./lib/Engineer");
// const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const Employee = require("./lib/Employee.js");

// const OUTPUT_DIR = path.resolve(__dirname, "output");
// const outputPath = path.join(OUTPUT_DIR, "team.html");

// const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

const questions = [
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
    },
    {
        type: "list",
        name: "memberType",
        message: "What type of team member would you like to add?",
        choices: ["Engineer", "Intern", "None"]
    }
]

const questionsMember = [
    {
        type: "input",
        name: "memberName",
        message: "What's the member's name?"
    },
    {
        type: "input",
        name: "memberId",
        message: "What's the member's ID?"
    },
    {
        type: "input",
        name: "memberEmail",
        message: "What's the member's email?"
    },
]


//creating variable of nested inquirer for less code
const inquirerNested = () => {
    inquirer
        .prompt(questionsMember)
        .then((answers) => {
            console.log("Saved details.");
        })
        .catch((error) => {
            if (error.isTtyError) {
                console.log(error)
            } else {
                console.log(error)
            }
        });
}


//different questions pushed to array: functions called inside the parent inquirer
const engineerQ = () => {
    questionsMember.push({
        type: "input",
        name: "memberGithub",
        message: "What's the engineer's GitHub?"
    });
}

const internQ = () => {
    questionsMember.push({
        type: "input",
        name: "memberSchool",
        message: "What's the intern's school?"
    });
}


//prompting
inquirer
  .prompt(questions)
  .then((answers) => {
    //checking to see if they wish to continue
    if (answers.memberType === "None") {
        console.log("Saved details.");
        return;
    } else if (answers.memberType === "Engineer") {
        engineerQ();
        inquirerNested();
    }
    else {
        internQ();
        inquirerNested();
    }})
  .catch((error) => {
    if (error.isTtyError) {
      console.log("Prompt couldn't be rendered in the current environment " + error);
    } else {
      console.log("Something else went wrong " + error);
    }
  });


// const secondPhase = () => {

//     inquirer
//         .prompt(questionsMember)
//         .then((answers) => {
//             //prompting changes for engineer
//             if (answers.memberType === "Engineer") {
//                 questionsMember.push({
//                     type: "input",
//                     name: "memberGithub",
//                     message: "What's the engineer's GitHub?"
//                 });
//                 // inquirer
//                 //     .prompt(questionsMember)
//                 //     .then((answers) => {
//                 //         console.log("Saved details.");
//                 //     })
//                 //     .catch((error) => {
//                 //         if (error.isTtyError) {
//                 //             console.log(error)
//                 //         } else {
//                 //             console.log(error)
//                 //         }
//                 //     });

//                 console.log("Saved details.");
//             }
//             //prompting changes for intern
//             else if (questions.answers.memberType === "Intern") {
//                 questionsMember.push({
//                     type: "input",
//                     name: "memberSchool",
//                     message: "What's the intern's school?"
//                 });
//                 // inquirer
//                 //     .prompt(questionsMember)
//                 //     .then((answers) => {
//                 //         console.log("Saved details.");
//                 //     })
//                 //     .catch((error) => {
//                 //         if (error.isTtyError) {
//                 //             console.log(error)
//                 //         } else {
//                 //             console.log(error)
//                 //         }
//                 //     });

//                 console.log("Saved details.");
//             }
//         })
//         .catch((error) => {
//             if (error.isTtyError) {
//                 console.log(error)
//             } else {
//                 console.log(error)
//             }
//         });
// }






