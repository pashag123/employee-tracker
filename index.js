const inquirer = require('inquirer');
const fs = require('fs');

const prompt = function () {
    inquirer
        .prompt(
            [{
                type: 'list',
                name: 'tableChoice',
                message: 'choose the table you would like ti view',
                choices: ['view all departments', 'view all roles', 'view all employees', 'add a de']
            }
            ]

        )
        .then((answers) => {
            
        })
}