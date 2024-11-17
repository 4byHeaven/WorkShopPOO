import { Person } from "./Person.ts"

const persons: Person[] =[

new Person("Jorge", 23),
new Person("Jaime", 19),
new Person("Gabriel", 25),
new Person("Yeffrey", 28),
new Person("Marta", 32),
new Person("German", 41),
new Person("Moe", 21),
new Person("Duvan", 27),
new Person("Argen", 23),
new Person("Santiago", 20),  

];

persons.forEach((Person => Person.saludar()));