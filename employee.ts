
import { Person } from "./Person.ts";
import { Direccion } from "./Direccion.ts";
import { EstadoCivil } from "./EstadoCivil.ts";
export class Employee extends Person {
    proyectos: Proyecto[] = [];
    salary: number;
    constructor(name: string, age: number, salary: number, direccion: Direccion, estadoCivil: EstadoCivil) {
        super(name, age, direccion, estadoCivil);
        this.salary = salary;
    }


    saludar(): void {
        console.log(`Hola, mi nombre es ${this.name}, tu edad es ${this.getage()} y el salario es de ${this.salary}.`);
    }

    trabajar(hours: number): void {
        console.log(`Trabaja ${hours} horas al día.`);
    }

    // Método para asignar un proyecto al empleado (Agregación)
    asignarProyecto(proyecto: Proyecto): void {
        if (!this.proyectos.includes(proyecto)) {
            this.proyectos.push(proyecto);
            proyecto.agregarEmpleado(this); // Relación bidireccional
        }
    }

    // Método para listar proyectos del empleado
    listarProyectos(): Proyecto[] {
        return this.proyectos;
    }
}




class Proyecto {
    private employees
        : Employee[] = [];

    constructor(public nombre: string) { }

    // Método para agregar employees al proyecto
    agregarEmpleado(empleado: Employee): void {
        if (!this.employees
            .includes(empleado)) {
            this.employees
                .push(empleado);
        }
    }

    // Método para listar employees asignados al proyecto
    listarEmpleados(): Employee[] {
        return this.employees
            ;
    }
}