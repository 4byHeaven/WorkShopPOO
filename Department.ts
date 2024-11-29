import { Employee } from "./Employee";

class Departament {
    private employees: Employee[] = []; // Lista de employees en el departament
  
    constructor(public nombre: string) {}
  
    // Método para agregar un employee al departament
    agregarEmpleado(employee: Employee): void {
      if (!this.employees.includes(employee)) {
        this.employees.push(employee);
        console.log(`Employee ${employee.name} agregado al departamento ${this.nombre}`);
      } else {
        console.log(`El employee ${employee.name} ya pertenece al departamento ${this.nombre}`);
      }
    }
  
    // Método para eliminar un employee del departament
    eliminarEmpleado(employee: Employee): void {
      const index = this.employees.indexOf(employee);
      if (index !== -1) {
        this.employees.splice(index, 1);
        console.log(`Employee ${employee.name} eliminado del departamento ${this.nombre}`);
      } else {
        console.log(`El employee ${employee.name} no pertenece al departamento ${this.nombre}`);
      }
    }
  
    // Método para listar employees del departament
    listarEmpleados(): Employee[] {
      return this.employees;
    }
  }