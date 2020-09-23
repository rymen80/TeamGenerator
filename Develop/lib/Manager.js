// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");
const inquirer = require("inquirer");

class Manager extends Employee{
    constructor(name, id, email, officeNumber) {
        super(name, email, id);
        this.officeNumber = officeNumber;
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
    getRole() {
        return "Manager";
    }
    officeNumManager() {
        inquirer.prompt([
            {
                type: "input",
                name: "OfficeNum",
                message: "Please enter your office number:"
            }
        ]);
    }
}
module.exports = Manager;