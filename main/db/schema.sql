DROP DATABASE IF EXISTS employee;
CREATE DATABASE  employee;

use employee_db

CREATE TABLE department {
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) UNIQUE NOT NULL
};

CREATE TABLE role {
    id INT UNSIGNED
}