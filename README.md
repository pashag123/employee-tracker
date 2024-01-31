# employee-tracker

## description

<ol>

<li>
installed both mysql2 and inquirer
</li>

<li>
 establishes a connection to a MySQL database using the mysql2 library in Node.js. It connects to the employee_tracker_db database on localhost as the root user, and includes an error handler to log any connection 

</li>

<li>
created the employee_tracker_db database in MySQL, consisting of three interconnected tables: department for department details, role for job roles and salaries linked to departments, and employee for personal details, roles, and managers of employees.
</li>

<li>
 created a seeds.sql file to populate the employee_tracker_db database with predefined data, including departments, roles, and employee details such as names, roles, and manager relationships.
</li>

<li>
Utilizes Node.js with required modules like inquirer for interactive CLI prompts, mysql2 for database operations, and console.table for displaying data in table format.

</li>
<li>
 Establishes a connection to a MySQL database and promisifies the query function for asynchronous operations

</li>
<li>
 Implements an interactive menu using inquirer to perform various actions like viewing, adding, and updating records in the employee_tracker_db database.

</li>
Includes several asynchronous functions to handle database operations like viewing all departments, roles, and employees; adding new roles, departments, and employees; and updating employee roles.

<li>
Each database operation is wrapped in a try-catch block to handle and log errors.

</li>

<li>
After completing each action, the application returns to the main menu, allowing continuous interaction until the user chooses to quit.
</li>




</ol>

## credits

worked with Peyton Touma and Salvador Gonzalez


## links


https://github.com/pashag123/employee-tracker

https://drive.google.com/file/d/1UF9SzUDIZjwvCVWCNcKzV35Lsmz7ldHc/view