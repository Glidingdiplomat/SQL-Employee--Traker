const connection = require("./connection");

class db {
  constructor(connection) {
    this.connection = connection;
  }

  findALLEmployees() {
    return this.connection.promise().query(
      `SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department,
            role.salary, concat(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN role on
            employee.role_id = role.id LEFT JOIN department on role.department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager_id;`
    );
  }
}
