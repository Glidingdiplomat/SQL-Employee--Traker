const { prompt } = require("inquirer");
const db = require("./db");
require("console.table");

init();

function init() {
  const logoText = logo({ name: "Employee Manager" }).render();

  console.log(logoText);

  loadMainPromts();
}

function loadMainPromts() {
  prompt([
    {
      type: "list",
      name: "choice",
      message: "What would you like to do?",
      choices: [
        {
          name: 'View All Employees',
          value: 'VIEW_EMPLOYEES'
      }],
    {
        name: 'View All Employee By Department',
        value: 'VIEWS_EMPLOYEES_BY_DEPARTMENT'
    },
    {
        name: 'Add Employee',
        value: 'ADD_EMPLOYEE',
    },
    {
        name: 'Remove Employee',
        value: 'REMOVE_EMPLOYEE'
    },
    {
        name: 'Update Employee Role',
        value: 'UPDATED_EMPLOYEE_ROLE'
    },
    {
        name: 'Update Employee Manager',
        value: 'UPDATE_EMPLOYEE_MANAGER'
    },
    {
        name: 'View All Roles',
        value: 'VIEW_ROLES'
    },
    {
        name: 'Add Role',
        value: 'ADD_ROLE'
    },
    {
        name: 'Remove Role',
        value: REMOVE_ROLE
    },
    {
        
    }
  ]);
}
