import { Aerolinea } from "../entities/Aerolinea";
import { Aeropuerto } from "../entities/Aeropuerto";
import { Avion } from "../entities/Avion";
import { Pasajero } from "../entities/Pasajero";
import { Vuelo } from "../entities/Vuelo";
import { RankeadorDeAerolineas } from "../entities/ranker_aerolineas";

test("La aerolinea con más cantidad de vuelos en el mes 06 fue 'Aerolineas Fran'", () => {
  const aeropuertoBsAs = new Aeropuerto("Buenos Aires");

  const pasajero1 = new Pasajero();
  const pasajero2 = new Pasajero();
  const pasajero3 = new Pasajero();

  const aerolineasFran = new Aerolinea('Aerolineas Fran');
  const avion1 = new Avion(aerolineasFran);
  aerolineasFran.agregarAvion(avion1);

  const vuelo1 = new Vuelo(null);
  vuelo1.fechaHoraPartida = "2024-06-07";
  const vuelo2 = new Vuelo(null);
  vuelo2.fechaHoraPartida = "2024-06-07";

  vuelo1.agregarPasajero(pasajero1);
  vuelo1.agregarPasajero(pasajero2);
  vuelo1.agregarPasajero(pasajero3);
  vuelo2.agregarPasajero(pasajero1);
  vuelo2.agregarPasajero(pasajero2);

  avion1.agregarVuelo(vuelo1);
  avion1.agregarVuelo(vuelo2);

  const aerolineasX = new Aerolinea('Aerolineas X');
  const avion2 = new Avion(aerolineasX);
  aerolineasX.agregarAvion(avion2);

  const vuelo3 = new Vuelo(null);
  vuelo3.fechaHoraPartida = "2024-06-07";
  vuelo3.agregarPasajero(pasajero1);

  avion2.agregarVuelo(vuelo3);

  aeropuertoBsAs.agregarAerolinea(aerolineasFran);
  aeropuertoBsAs.agregarAerolinea(aerolineasX);

  let ranker = new RankeadorDeAerolineas();
  let aerolineaConMasPasajeros = ranker.aerolineaConMayorCantidadDePasajerosEn('06', aeropuertoBsAs);

  expect(aerolineaConMasPasajeros.nombre).toBe('Aerolineas Fran');
});

test("La aerolinea con más cantidad de vuelos en el mes 06 fue 'Aerolineas X'", () => {
  const aeropuertoBsAs = new Aeropuerto("Buenos Aires");

  const pasajero1 = new Pasajero();
  const pasajero2 = new Pasajero();
  const pasajero3 = new Pasajero();
  const pasajero4 = new Pasajero();
  const pasajero5 = new Pasajero();
  const pasajero6 = new Pasajero();

  const aerolineasFran = new Aerolinea('Aerolineas Fran');
  const avion1 = new Avion(aerolineasFran);
  aerolineasFran.agregarAvion(avion1);

  const vuelo1 = new Vuelo(null);
  vuelo1.fechaHoraPartida = "2024-06-07";
  const vuelo2 = new Vuelo(null);
  vuelo2.fechaHoraPartida = "2024-06-07";

  vuelo1.agregarPasajero(pasajero1);
  vuelo1.agregarPasajero(pasajero2);
  vuelo1.agregarPasajero(pasajero3);
  vuelo2.agregarPasajero(pasajero1);
  vuelo2.agregarPasajero(pasajero2);

  avion1.agregarVuelo(vuelo1);
  avion1.agregarVuelo(vuelo2);

  const aerolineasX = new Aerolinea('Aerolineas X');
  const avion2 = new Avion(aerolineasX);
  aerolineasX.agregarAvion(avion2);

  const vuelo3 = new Vuelo(null);
  vuelo3.fechaHoraPartida = "2024-06-07";
  vuelo3.agregarPasajero(pasajero1);
  vuelo3.agregarPasajero(pasajero2);
  vuelo3.agregarPasajero(pasajero3);
  vuelo3.agregarPasajero(pasajero4);
  vuelo3.agregarPasajero(pasajero5);
  vuelo3.agregarPasajero(pasajero6);

  avion2.agregarVuelo(vuelo3);

  aeropuertoBsAs.agregarAerolinea(aerolineasFran);
  aeropuertoBsAs.agregarAerolinea(aerolineasX);

  let ranker = new RankeadorDeAerolineas();
  let aerolineaConMasPasajeros = ranker.aerolineaConMayorCantidadDePasajerosEn('06', aeropuertoBsAs);

  expect(aerolineaConMasPasajeros.nombre).toBe('Aerolineas X');
});
