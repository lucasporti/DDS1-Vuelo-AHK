import { Aeropuerto } from "../entities/Aeropuerto";
import { Vuelo } from "../entities/Vuelo";
import { RankeadorDeAeropuertos } from "../entities/ranker_aeropuertos";
import { Escala } from "../entities/Escala"


test("El aeropuerto que recibió menos vuelos en escalas es 'Aeropuerto BsAs'", () => {
  const aeropuertoBsAs = new Aeropuerto("Buenos Aires");
  const aeropuertoCordoba = new Aeropuerto("Cordoba");
  const aeropuertoMendoza = new Aeropuerto("Mendoza");

  const vuelo1 = new Vuelo("2024-06-07", null);
  const vuelo2 = new Vuelo("2024-06-08", null);
  const vuelo3 = new Vuelo("2024-06-09", null);

  const escalaCordoba = new Escala(aeropuertoCordoba, 60);
  const escalaMendoza1 = new Escala(aeropuertoMendoza, 120);
  const escalaMendoza2 = new Escala(aeropuertoMendoza, 90);

  aeropuertoCordoba.agregarEscala(escalaCordoba);
  aeropuertoMendoza.agregarEscala(escalaMendoza1);
  aeropuertoMendoza.agregarEscala(escalaMendoza2);

  const aeropuertos = [aeropuertoBsAs, aeropuertoCordoba, aeropuertoMendoza];
  const rankeador = new RankeadorDeAeropuertos();
  const aeropuertoConMenosEscalas = rankeador.aeropuertoConMenorCantDeEscalas(aeropuertos);

  expect(aeropuertoConMenosEscalas.nombre).toBe('Buenos Aires');
});

