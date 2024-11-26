
export abstract class Vehiculo {

    abstract arrancar(): void;
}

export class Coche extends Vehiculo {
    arrancar(): void {
        console.log(`El coche está arrancando con llave.`);
    }
}

export class Moto extends Vehiculo {
    arrancar(): void {
        console.log(`La moto de marca está arrancando con botón de encendido.`);
    }
}
