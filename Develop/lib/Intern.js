// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

const Employee = require("./Employee");
//const inquirer = require("inquirer");

class Intern extends Employee{
    constructor(name, id, email, school) {
        super(name, email, id);
        this.school = school;
    }
    getSchool() {
        return this.school;
    }
    getRole() {
        return "Intern";
    }
    internSchool() {
        inquirer.prompt([
            {
                type: "input",
                name: "school",
                message: "Please enter your school name:"
            }
        ]);
    }
}
module.exports = Intern;