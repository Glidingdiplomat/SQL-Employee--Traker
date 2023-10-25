DROP DATABASE IF EXISTS employee;
CREATE DATABASE  employee;

use employee_db

CREATE TABLE department {
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    dept_name VARCHAR(30) UNIQUE NOT NULL
};

CREATE TABLE role {
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30),
    salary DECIMAL UNIQUE NOT NULL,
    department_id INT UNSIGNED NOT NULL,
    INDEX
}

CREATE TABLE employee {
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT UNSIGNED NOT NULL,
    manager_id INT UNSIGNED,
    INDEX role_id (role_id),
    INDEX ma
}