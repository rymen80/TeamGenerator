// TODO: Write code to define and export the Employee class

//const inquirer = require("inquirer");

class Employee{
    constructor(name,id,email) {
        this.name = name;
        this.id = id;
        this.email =email;
    }
    getName() {
        return this.name
    }
    getId() {
        return this.id
    }
    getEmail() {
        return this.email
    }
    getRole() {
        return "Employee"
    }
    questions() {
        inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "Please enter a name:"
            },
            {
                type: "input",
                name: "id",
                message: "Please enter an ID:"
            },
            {
                type: "input",
                name: "email",
                message: "Please enter an email address:"

            }

        ])
    }

}
module.exports = Employee;