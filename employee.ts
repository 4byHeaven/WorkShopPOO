
import {Person} from "./Person.ts";

class Employeee extends Person {
    salary: number;

    constructor(nombre: string, edad: number, salary: number) {
        super(nombre, edad); 
        this.salary = salary;
    }

    trabajar(hours: number): void {
        console.log(`Empleado: Trabajando ${hours} horas al día.`);
    }
}

