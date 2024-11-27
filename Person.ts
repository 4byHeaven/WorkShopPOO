import { Vehiculo } from "./vehiculo.ts"
import { Direccion } from "./Direccion.ts"
import { EstadoCivil } from "./EstadoCivil.ts"
export class Person {

    name: string
    private age: number
    direccion: Direccion
    Vehiculos: Vehiculo[]
    estadocivil: EstadoCivil


    constructor(name: string, age: number, direccion: Direccion, estadoCivil: EstadoCivil) {

        this.name = name
        this.age = age
        this.direccion = direccion
        this.estadocivil = estadoCivil
    }

    saludar(): void {
        console.log(`Hola, mi nombre es ${this.name} y tengo ${this.getage()} años, vivo en ${this.direccion.ciudad}, ${this.direccion.pais}, y mi estado civil es ${this.estadocivil}.`);
    }

    getage(): number {
        return this.age;
    }

    agregarVehiculo(vehiculo: Vehiculo): void {
        this.Vehiculos.push(vehiculo);
    }

}