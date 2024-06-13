import { Avion } from "../entities/Avion";
import { Vuelo } from "../entities/Vuelo";
import { Pasajero } from "../entities/Pasajero";

test("La capacidad de pasajeros es de 50%", () => {
  // Configuramos los datos de prueba

  let vuelo = new Vuelo();

  let avion = new Avion(14, "Avión épico");

  let pasajero0 = new Pasajero("Lucas", "Portillo");
  let pasajero1 = new Pasajero("Ezequiel", "Escobar");
  let pasajero2 = new Pasajero("Ignacio", "Brandt");
  let pasajero3 = new Pasajero("Valentino", "Taborda");
  let pasajero4 = new Pasajero("German", "Bauer");
  let pasajero5 = new Pasajero("Tomas", "Ramirez");
  let pasajero6 = new Pasajero("Fernanda", "Baez");

  vuelo.agregarPasajero(pasajero0);
  vuelo.agregarPasajero(pasajero1);
  vuelo.agregarPasajero(pasajero2);
  vuelo.agregarPasajero(pasajero3);
  vuelo.agregarPasajero(pasajero4);
  vuelo.agregarPasajero(pasajero5);
  vuelo.agregarPasajero(pasajero6);

  vuelo.avion = avion;
  
  // Ejecutamos el método que queremos testear  y guardamos su resultado
  let capacidadAvion = vuelo.capacidadOcupadaPorPasajeros();

  // Creamos el valor conocido / esperado
  let capacidadEsperada = 50;

  // Aserción
  expect(capacidadAvion).toBe(capacidadEsperada);
})
