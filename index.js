const { prompt } = require("inquirer");
const db = require("./db/connection");
require("console.table");
// allow async await:
const utils = require("util");
db.query = utils.promisify(db.query);



const inquirer = require('inquirer');
const fs = require('fs');

function startApp() {
    inquirer
        .prompt(
            [{
                type: 'list',
                name: 'tableChoice',
                message: 'choose the table you would like ti view',
                choices: ['view all departments', 'view all roles', 'view all employees', 'add a department', 'add a role', 'add an employee', 'update an employee role', 'quit']
            }
            ]

        )
        .then((answers) => {
            switch (answers.tableChoice) {
                case 'view all departments':
                    break;

                case "add a role":
                    addRole()
                    break;

                case 'add a department':
                    addDepartment()
                    break;

                case 'add an employee':
                    addEmployee()
                    break;

                case 'update an employee role':
                    updateEmployee()
                    break;




                case 'Quit':
                    db.close();

            }
        })
}


async function addRole() {
    const departments = await db.query(
        "select id as value, name as name from department"
    );
    const { role_title, role_salary, dept_id } = await prompt([
        {
            type: "input",
            name: "role_title",
            message: "Enter the title of the new role.",
        },
        {
            type: "input",
            name: "role_salary",
            message: "Enter the salary of the new role.",
        },
        {
            type: "list",
            name: "dept_id",
            message: "Which department does this role belong to?",
            choices: departments,
        },
    ]);
    await db.query(
        "insert into role (title, salary, department_id) values (?,?,?) ",
        [role_title, role_salary, dept_id]
    );
    console.log("The new role was successfully added.");
    startApp()

}


async function addDepartment() {

    const { department_title, } = await prompt([
        {
            type: 'input',
            name: 'name',
            message: 'what is the name of the department you are trying to add?'
        }
    ])
    await db.query(
        "INSERT INTO department (department_name) VALUES (?)",
        [department_name.department_name]
    );
    console.log('the new Department was succesfully added!')
    startApp()
}


async function addEmployee() {
    let managers = await db.query(
        "select id as value, concat(first_name, ' ', last_name) as name from employee where manager_id is null"
    );
    let roleList = await db.query(
        "select id as value, title as name from role"
    );
    managers = [{ value: null, name: "No Manager" }, ...managers];
    let answers = await prompt([
        {
            type: "input",
            name: "first_name",
            message: "please enter your first name"
        },
        {
            type: "input",
            name: "last_name",
            message: "please enter your last name"
        },
        {
            type: "list",
            name: "role",
            message: "What role does the employee have?",
            choices: roleList
        },
        {
            type: "list",
            name: "manager",
            message: "who is the employees manager?",
            choices: managers
        },


    ])
    await db.query(
        "insert into employee (first_name, last_name, role_id, manager_id) values(?, ?, ?, ?)", [answers.first_name, answers.last_name, answers.role, answers.manager]
    )
    console.log("the employee has been succesfully added")
    startApp()
}

async function updateEmployee() {
    let employees = await db.query(
        "select id as value, concat(first_name, ' ', last_name) as name from employee");

    let roleList = await db.query(
        "select id as value, title as name from role"
    );

    let answers = await prompt([
        {
            type: "list",
            name: "employeeChoice",
            message: "Choose the employee you would like to update",
            choices: employees
        },
        {
            type: "list",
            name: "role",
            message: "What is the employees new role",
            choices: roleList
        },
    ])
    await db.query(
        "update employee set role_id = ? where id = ? ", [answers.role, answers.employeeChoice]
    )
    console.log("employee updated")
    startApp();
}



startApp();

