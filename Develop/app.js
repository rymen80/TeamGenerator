const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const employees = [];

const initialQuestion = [
    {
        type: 'list',
            choices: ['manager','engineer','intern'],
        message: 'Would you like to add a team member?',
        name: 'addTeamMember',
    }
]

const managerQuestions =[
    // start with the manager
    {
        type: 'input',
        name: "managerName",
        message: "Please enter the manager's name:"
    },
    {
        type: 'input',
        name: 'managerID',
        message: "Please Enter the manager's ID:"
    },
    {
        type: "input",
        name: "managerEmail",
        message: "What is the manager's email?",
    },
    {
        type: 'input',
        name: 'managerOfficeNum',
        message: "Please Enter the managers office number:"
    },
    {
        type: 'list',
        choices: ['manager','engineer','intern'],
        message: 'Would you like to add an additional team member?',
        name: 'addTeamMember',
    }
    ];

const engineerQuestions =[

    {
        type: 'input',
        name: "engineerName",
        message: "Please enter the engineer's name:"
    },
    {
        type: 'input',
        name: 'engineerID',
        message: "Please Enter the engineer's ID:"
    },
    {
        type: "input",
        name: "engineerEmail",
        message: "What is the engineer's email?",
    },
    {
        type: 'input',
        name: 'engineerGitHub',
        message: "Please Enter the engineer's gitHub username:"
    },
    {
        type: 'list',
        choices: ['manager','engineer','intern'],
        message: 'Would you like to add an additional team member?',
        name: 'addTeamMember',
    }
];

const internQuestions =[

    {
        type: 'input',
        name: "internName",
        message: "Please enter the intern's name:"
    },
    {
        type: 'input',
        name: 'internID',
        message: "Please Enter the intern's ID:"
    },
    {
        type: "input",
        name: "internEmail",
        message: "What is the intern's email?",
    },
    {
        type: 'input',
        name: 'internSchool',
        message: "Please Enter the intern's school name:"
    },
    {
        type: 'list',
        choices: ['manager','engineer','intern'],
        message: 'Would you like to add an additional team member?',
        name: 'addTeamMember',
    }
];

inquirer.prompt(initialQuestion).then( answers =>{
    let addTeamMember = answers.addTeamMember;
    const addManager = () => {
        if(addTeamMember === 'manager') {
            inquirer.prompt(managerQuestions).then(answers => {
                const manager = new Manager(answers.managerName, answers.managerID, answers.managerEmail, answers.managerOfficeNum)
                employees.push(manager);
                console.log(employees);
            })
        }
    }
    const addEngineer = () => {
        if(addTeamMember === 'engineer') {
            inquirer.prompt(engineerQuestions).then( answers =>{
                const engineer = new Engineer(answers.engineerName, answers.engineerID, answers.engineerEmail, answers.engineerGitHub)
                employees.push(engineer)
                console.log(employees);
            })
        }
    }
    const addIntern = () => {
        if(addTeamMember === 'intern') {
            inquirer.prompt(internQuestions).then( answers =>{
                const intern = new Intern(answers.internName, answers.internID, answers.internEmail, answers.internSchool)
                employees.push(intern)
                console.log(employees);
            })
        }
    }

});



// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
