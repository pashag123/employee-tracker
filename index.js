const inquirer = require('inquirer');
const fs = require('fs');

 function startApp () {
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





                    case 'Quit':
                    db.close();

            }
        })
}






module.exports 