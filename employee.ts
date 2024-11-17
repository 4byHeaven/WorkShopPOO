
import {Person} from "./Person.ts";

class Employeee extends Person {
    salary: number;

    constructor(nombre: string, edad: number, salary: number) {
        super(nombre, edad); 
        this.salary = salary;
    }

    saludar(): void {
        console.log(`Hola, mi nombre es ${this.name}, tu edad es ${this.getage()} y el salario es de ${this.salary}.`);
    }

    trabajar(hours: number): void {
        console.log(`Trabaja ${hours} horas al día.`);
    }
}

