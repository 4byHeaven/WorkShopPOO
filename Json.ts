import { Employee } from "./employee.ts";

// JSON original
const empleadosJSON = [
  {
    name: "Mickey Mouse",
    age: 30,
    salary: 900,
    direccion: {
      calle: "Calle Principal 1",
      ciudad: "Ciudad Animada",
      pais: "Estados Unidos"
    }
  },
  {
    name: "Pato Donald",
    age: 25,
    salary: 850,
    direccion: {
      calle: "Avenida de los Patos 22",
      ciudad: "Villa Pato",
      pais: "Estados Unidos"
    }
  },
  {
    name: "Bugs Bunny",
    age: 28,
    salary: 870,
    direccion: {
      calle: "Calle de las Zanahorias 45",
      ciudad: "Alburquerque",
      pais: "Estados Unidos"
    }
  },
  {
    name: "Bob Esponja",
    age: 35,
    salary: 910,
    direccion: {
      calle: "Fondo de Bikini 12",
      ciudad: "Fondo de Bikini",
      pais: "Océano Pacífico"
    }
  },
  {
    name: "Homero Simpson",
    age: 39,
    salary: 930,
    direccion: {
      calle: "Avenida Siempreviva 742",
      ciudad: "Springfield",
      pais: "Estados Unidos"
    }
  },
  {
    name: "Scooby-Doo",
    age: 7,
    salary: 750,
    direccion: {
      calle: "Camino Misterioso 88",
      ciudad: "Coolsville",
      pais: "Estados Unidos"
    }
  },
  {
    name: "Pedro Picapiedra",
    age: 40,
    salary: 890,
    direccion: {
      calle: "Carretera de Piedra 123",
      ciudad: "Piedradura",
      pais: "Prehistoria"
    }
  },
  {
    name: "Dora la Exploradora",
    age: 8,
    salary: 780,
    direccion: {
      calle: "Camino Aventura 67",
      ciudad: "Exploradores",
      pais: "Peru"
    }
  },
  {
    name: "Tom Gato",
    age: 6,
    salary: 770,
    direccion: {
      calle: "Avenida Jerry 98",
      ciudad: "Ciudad Animada",
      pais: "Estados Unidos"
    }
  },
  {

    name: "Jerry Ratón",
    age: 5,
    salary: 780,
    direccion: {
      calle: "Calle del Queso 101",
      ciudad: "Ciudad Animada",
      pais: "Estados Unidos"
    }
  }
];

// Convertir JSON a objetos de la clase Empleado
const empleados: Employee[] = empleadosJSON.map(
  (emp) =>
    new Employee(emp.name, emp.age, emp.salary, emp.direccion)
);

// Función para devolver los empleados en formato JSON
function obtenerEmpleadosComoJSON(): string {
  return JSON.stringify(empleados, null, 2);
}

// Mostrar los datos convertidos en formato JSON
console.log(obtenerEmpleadosComoJSON());
