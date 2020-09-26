// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");
//const inquirer = require("inquirer");

class Engineer extends Employee{
    constructor(name, id, email, gitHub) {
        super(name, email, id);
        this.gitHub = gitHub;
    }
    getGithub() {
        return this.gitHub;
    }
    getRole() {
        return "Engineer";
    }
    gitUserEngineer() {
        inquirer.prompt([
            {
                type: "input",
                name: "gitUsername",
                message: "Please enter your gitHub user name:"
            }
        ]);
    }
}
module.exports = Engineer;