
// dependencies
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

// empty array to push our team member to.
const employees = [];

// questions to ask manager
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
        choices: ['manager','engineer','intern', 'no'],
        message: 'Would you like to add an additional team member?',
        name: 'addTeamMember',
    }
    ];
// question to ask engineer
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
        choices: ['manager','engineer','intern', 'no'],
        message: 'Would you like to add an additional team member?',
        name: 'addTeamMember',
    }
];
// question to ask intern
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
        choices: ['manager','engineer','intern', 'no'],
        message: 'Would you like to add an additional team member?',
        name: 'addTeamMember',
    }
];
// function to call when user wants to input a manager
const addManager = async () => {
    inquirer.prompt(managerQuestions).then( answers => {
    const manager = new Manager(answers.managerName, answers.managerID, answers.managerEmail, answers.managerOfficeNum)
    employees.push(manager);

        let addTeamMember = answers.addTeamMember;
        checkAddMember(addTeamMember)

    })
}
// function to call when user wants to input a engineer
const addEngineer = async () => {

    inquirer.prompt(engineerQuestions).then( answers => {
        const engineer = new Engineer(answers.engineerName, answers.engineerID, answers.engineerEmail, answers.engineerGitHub)
        employees.push(engineer);
        let addTeamMember = answers.addTeamMember;
        checkAddMember(addTeamMember)
    })
}
// function to call when user wants to input a intern
const addIntern = async () => {
    inquirer.prompt(internQuestions).then( answers =>{
        const intern = new Intern(answers.internName, answers.internID, answers.internEmail, answers.internSchool)
        employees.push(intern)
        let addTeamMember = answers.addTeamMember;
       checkAddMember(addTeamMember)

    })
}
//function to call that checks if a new team member should be added and if not writes the file.
const checkAddMember = newMember => {
    switch (newMember) {
        case 'manager':
            addManager();
            break;
        case 'engineer':
            addEngineer();
            break;
        case 'intern':
            addIntern();
            break;
         case 'no':
             fs.writeFileSync(outputPath, render(employees),"utf-8");
             break;
        default:
            fs.writeFileSync(outputPath, render(employees),"utf-8");
            break;
    }

}
// call the add manger app to run the program
    addManager()

// creates an path to a a directory called output
const OUTPUT_DIR = path.resolve(__dirname, "output");
// creates a new html file that is written to the output directory
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


