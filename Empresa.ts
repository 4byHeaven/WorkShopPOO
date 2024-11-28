import { Employee } from "./Employee";

class Empresa {
employees: Employee[]= [];

agregarEmpleado(Employee: Employee):void {
    this.employees.push(Employee);
}

eliminarEmpleado(name: string):void {
    this.employees = this.employees.filter(employee => employee.name !== name);
}

calcularTotalSalarios(): number {
    return this.employees.reduce((total, employee) => total + employee.salary, 0);
  }

}