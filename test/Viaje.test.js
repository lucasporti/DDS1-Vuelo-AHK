import { Vuelo } from "../entities/Vuelo";
import { Viaje } from "../entities/Viaje";
import { Escala } from "../entities/Escala";

test("Viaje dura 200 mins, con dos escalas de 40 y dos vuelos de 60", () => {
  // Configuramos los datos de prueba
  const primerEscala = new Escala(null, 40);
  const segundaEscala = new Escala(null, 40);

  const primerVuelo = new Vuelo(60);
  const segundoVuelo = new Vuelo(60);

  const viaje = new Viaje();
  viaje.agregarEscala(primerEscala);
  viaje.agregarEscala(segundaEscala);
  viaje.agregarVuelo(primerVuelo);
  viaje.agregarVuelo(segundoVuelo);

  // Ejecutamos el método que queremos testear y guardamos su resultado
  const duracionTotalObtenida = viaje.duracionTotalAproxEnMins();

  // Creamos el valor conocido / esperado
  const duracionEsperada = 200;

  // Aserción
  expect(duracionTotalObtenida).toBe(duracionEsperada);
});