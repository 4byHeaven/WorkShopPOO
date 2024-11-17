import { Employee } from "./employee.ts"

const Employees: Employee[] =[

new Employee("Jorge", 23,100),
new Employee("Jaime", 19,200),
new Employee("Gabriel", 25,150),
new Employee("Yeffrey", 28,170),
new Employee("Marta", 32,140),
new Employee("German", 41,160),
new Employee("Moe", 21, 180),
new Employee("Duvan", 27, 210),
new Employee("Argen", 23, 240),
new Employee("Santiago", 20, 155),  

];

Employees.forEach((Employee => Employee.saludar()));