import { Person } from "./Person.ts"

const person1: Person = new Person("Jorge", 23)
const person2: Person = new Person("Jaime", 19)
const person3: Person = new Person("Gabriel", 25)
const person4: Person = new Person("Yeffrey", 28)
const person5: Person = new Person("Marta", 32)
const person6: Person = new Person("German", 41)
const person7: Person = new Person("Moe", 21)
const person8: Person = new Person("Duvan", 27)
const person9: Person = new Person("Argen", 23)
const person10: Person = new Person("Santiago", 20)

const main = () => {
   

    console.log(person1.nombre)
    console.log(person2.nombre)
    console.log(person3.nombre)
    console.log(person4.nombre)
    console.log(person5.nombre)
    console.log(person6.nombre)
    console.log(person7.nombre)
    console.log(person8.nombre)
    console.log(person9.nombre)
    console.log(person10.nombre)

}
main()