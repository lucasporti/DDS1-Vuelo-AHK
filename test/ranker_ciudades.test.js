import { Ciudad } from "../entities/Ciudad";
import { Aeropuerto } from "../entities/Aeropuerto";
import { Vuelo } from "../entities/Vuelo";
import { RankerDeCiudades } from "../entities/ranker_ciudades";

test("RankerDeCiudades - ciudadQueMasPasajerosRecibioEl", () => {
  // ciudades
  const ciudad1 = new Ciudad("Buenos Aires");
  const ciudad2 = new Ciudad("Córdoba");

  // vuelos para ciudad1
  const aeropuerto1 = new Aeropuerto("Ezeiza");
  const vuelo1 = new Vuelo("2024-06-07", "2024-06-07");
  vuelo1.agregarPasajero({});
  vuelo1.agregarPasajero({});
  aeropuerto1.agregarVuelo(vuelo1);
  ciudad1.agregarAeropuerto(aeropuerto1);

  // vuelos para ciudad2
  const aeropuerto2 = new Aeropuerto("Jorge Newbery");
  const vuelo2 = new Vuelo("2024-06-07", "2024-06-07");
  vuelo2.agregarPasajero({});
  aeropuerto2.agregarVuelo(vuelo2);
  ciudad2.agregarAeropuerto(aeropuerto2);

  // Array de ciudades
  const ciudades = [ciudad1, ciudad2];

  // instancia del RankerDeCiudades
  const ranker = new RankerDeCiudades();

  const ciudadConMasPasajeros = ranker.ciudadQueMasPasajerosRecibioEl("2024-06-07", ciudades);

  expect(ciudadConMasPasajeros.nombre).toBe("Buenos Aires");
})
