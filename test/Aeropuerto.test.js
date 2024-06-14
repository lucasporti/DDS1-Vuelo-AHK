import { Aeropuerto } from "../entities/Aeropuerto"
import { Vuelo } from "../entities/Vuelo";

test("Dos vuelos salieron el 2024/06/07 de Buenos Aires", () => {
  const aeropuertoBsAs = new Aeropuerto("Buenos Aires");

  const unVuelo = new Vuelo(40);
  unVuelo.aeropuertoSalida = aeropuertoBsAs;
  unVuelo.fechaHoraPartida = "2024-06-07";

  aeropuertoBsAs.agregarVuelo(unVuelo);

  const otroVuelo = new Vuelo(50);
  otroVuelo.aeropuertoSalida = aeropuertoBsAs;
  otroVuelo.fechaHoraPartida = "2024-06-07";

  aeropuertoBsAs.agregarVuelo(otroVuelo);

  const cantidadObtenida = aeropuertoBsAs.cantVuelosQuePartieron("2024-06-07");

  expect(cantidadObtenida).toBe(2);
});

test("Un vuelo llegó el 2024/06/07 a Berlin", () => {
  const aeropuertoBerlin = new Aeropuerto();

  const unVuelo = new Vuelo(80);
  unVuelo.aeropuertoLlegada = aeropuertoBerlin;
  unVuelo.fechaHoraLlegada = "2024-06-07"

  aeropuertoBerlin.agregarVuelo(unVuelo);

  const cantObtenida = aeropuertoBerlin.cantVuelosQueLlegaron("2024-06-07");

  expect(cantObtenida).toBe(1);
});

test("El aeropuerto que recibió menos vuelos en escalas fue el aeropuerto de 'San Francisco'")