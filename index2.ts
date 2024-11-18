import { Employee } from "./employee.ts"
import { Direccion } from "./Direccion.ts"

const direcciones: Direccion[] = [
    { calle: "Avenida Siempre Viva 742", ciudad: "Springfield", pais: "Estados Unidos" },
    { calle: "Calle Falsa 123", ciudad: "Villa del Mar", pais: "Argentina" },
    { calle: "Boulevard de los Sueños", ciudad: "Santiago", pais: "Chile" },
    { calle: "Avenida Libertador 456", ciudad: "Buenos Aires", pais: "Argentina" },
    { calle: "Rua das Flores 1000", ciudad: "São Paulo", pais: "Brasil" },
    { calle: "Calle Luna 789", ciudad: "Lima", pais: "Perú" },
    { calle: "Avenida Central 100", ciudad: "Bogotá", pais: "Colombia" },
    { calle: "Paseo de la Reforma 200", ciudad: "Ciudad de México", pais: "México" },
    { calle: "Callejón del Gato 15", ciudad: "Quito", pais: "Ecuador" },
    { calle: "Carrera 50", ciudad: "Caracas", pais: "Venezuela" }
];

const Employees: Employee[] = [

    new Employee("Jorge", 23, 100, direcciones[0]),
    new Employee("Jaime", 19, 200, direcciones[1]),
    new Employee("Gabriel", 25, 150, direcciones[2]),
    new Employee("Yeffrey", 28, 170, direcciones[3]),
    new Employee("Marta", 32, 140, direcciones[4]),
    new Employee("German", 41, 160, direcciones[5]),
    new Employee("Moe", 21, 180, direcciones[6]),
    new Employee("Duvan", 27, 210, direcciones[7]),
    new Employee("Argen", 23, 240, direcciones[8]),
    new Employee("Santiago", 20, 155, direcciones[9]),

];

Employees.forEach(Employee => {
    Employee.saludar();
    console.log(`ciudad: ${Employee.direccion.ciudad}`);
});