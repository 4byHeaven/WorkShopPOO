import { Direccion } from "./Direccion.ts"
import { Person } from "./Person.ts"

// Función flecha que transforma un JSON en una instancia de Person y ejecuta el método saludar
export const processPersonJson = (objetoJson: any): void => {
    const personInstance = new Person(objetoJson.name, objetoJson.age, objetoJson.direccion);

    personInstance.saludar();
};

// Función que cree un JSON e invoque a la función anterior
export const createAndProcessPerson = (): void => {
    const personJson = {name: "Ana", age: 28, direccion: { calle: "Calle Falsa 123", ciudad: "Quito", pais: "Ecuador" }};

    processPersonJson(personJson);
};

