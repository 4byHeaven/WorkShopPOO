import { Direccion } from "./Direccion.ts"
export class Person {

    name: string
    private age: number
    direccion: Direccion

    constructor(name: string, age: number, direccion: Direccion) {

        this.name = name
        this.age = age
        this.direccion = direccion
    }

    saludar(): void {
        console.log(`Hola, mi nombre es ${this.name} y tengo ${this.getage()} años`);

    }

    getage(): number {
        return this.age;
    }


}