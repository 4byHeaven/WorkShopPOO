export class Person {

    name: string
    private age: number

    constructor(name: string, age: number) {

    this.name = name
    this.age = age

    }
    saludar(): void {
        console.log(`Hola, mi nombre es ${this.name} y tengo ${this.age} años`);

    }

    getage(): number {
        return this.age;
    }
    

}