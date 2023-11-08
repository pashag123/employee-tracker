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
        "select id as value, concat(first_name, ' ', last_name) as name from employee"
    );
    let roleList = await db.query(
        "select id as value, title as role_name from role"
    )
    const { first_name, last_name, } = await prompt([
        {
            type: "input",
            name: "first_name",
            message: "please enter your first name"
        },
        {
            type: "input",
            name: "last_name",
            message: "please enter your last name"
        }
    ])

}

startApp();

