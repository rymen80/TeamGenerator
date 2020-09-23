// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

const Employee = require("./Employee");
const inquirer = require("inquirer");

class Intern extends Employee{
    constructor(name, id, email, schoolName) {
        super(name, email, id);
        this.schoolName = schoolName;
    }
    getSchoolName() {
        return this.schoolName;
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