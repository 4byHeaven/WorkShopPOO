export class Person {

    nombre: string
    private edad: number

    constructor(nombre: string, edad: number) {

    this.nombre = nombre
    this.edad = edad

    }
    saludar(): void {
        console.log(`Hola, mi nombre es ${this.getedad()} y tengo ${this.edad} años`);
    }

    getedad():number { 
        return this.edad;
    }
}