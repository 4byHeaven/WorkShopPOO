
abstract class Vehiculo {
    marca: string;

    constructor(marca: string) {
        this.marca = marca;
    }

  
    abstract arrancar(): void;
}

class Coche extends Vehiculo {
    arrancar(): void {
        console.log(`El coche de marca ${this.marca} está arrancando con llave.`);
    }
}

class Moto extends Vehiculo {
    arrancar(): void {
        console.log(`La moto de marca ${this.marca} está arrancando con botón de encendido.`);
    }
}
