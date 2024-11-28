import { Person } from "./Person.ts"
import { Direccion } from "./Direccion.ts"
import { EstadoCivil } from "./EstadoCivil.ts";


const direcciones: Direccion[] = [
    { calle: "Calle 123", ciudad: "Ciudad 1", pais: "Argentina" },
    { calle: "Calle 456", ciudad: "Ciudad 2", pais: "Chile" },
    { calle: "Calle 789", ciudad: "Ciudad 3", pais: "Colombia" },
    { calle: "Calle 1111", ciudad: "Ciudad 4", pais: "Perú" },
    { calle: "Calle 1234", ciudad: "Ciudad 5", pais: "México" },
    { calle: "Calle 789", ciudad: "Ciudad 6", pais: "Guatemala" },
    { calle: "Calle 1705", ciudad: "Ciudad 7", pais: "Honduras" },
    { calle: "Calle 789", ciudad: "Ciudad 8", pais: "Cuba" },
    { calle: "Calle 356", ciudad: "Ciudad 9", pais: "Jamaica" },
    { calle: "Calle 8009", ciudad: "Ciudad 10", pais: "España" },
];

const persons: Person[] = [

    new Person("Jorge", 23, direcciones[0],EstadoCivil.Soltero),
    new Person("Jaime", 19, direcciones[1],  EstadoCivil.Casado),
    new Person("Gabriel", 25, direcciones[2],  EstadoCivil.Divorciado),
    new Person("Yeffrey", 28, direcciones[3], EstadoCivil.Soltero),
    new Person("Marta", 32, direcciones[4],  EstadoCivil.Casado),
    new Person("German", 41, direcciones[5], EstadoCivil.Soltero),
    new Person("Moe", 21, direcciones[6], EstadoCivil.Divorciado),
    new Person("Duvan", 27, direcciones[7],  EstadoCivil.Casado),
    new Person("Argen", 23, direcciones[8], EstadoCivil.Soltero),
    new Person("Santiago", 20, direcciones[9],  EstadoCivil.Divorciado),
   
];

persons.forEach(Person => {
    Person.saludar();
    console.log(`ciudad: ${Person.direccion.ciudad}`);
});