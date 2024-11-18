
import { Person } from "./Person.ts";
import { Direccion } from "./Direccion.ts";

export class Employee extends Person {
    salary: number;
    constructor(name: string, age: number, salary: number, direccion: Direccion) {
        super(name, age, direccion);
        this.salary = salary;
    }


    saludar(): void {
        console.log(`Hola, mi nombre es ${this.name}, tu edad es ${this.getage()} y el salario es de ${this.salary}.`);
    }

    trabajar(hours: number): void {
        console.log(`Trabaja ${hours} horas al día.`);
    }
}
