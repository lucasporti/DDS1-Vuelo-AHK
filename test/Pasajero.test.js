import { Pasajero } from "../entities/Pasajero";
import { Aeropuerto } from '../entities/Aeropuerto';
import { Ciudad } from '../entities/Ciudad';
import { Vuelo } from "../entities/Vuelo";

test("La cantidad de vuelos totales que realizó un pasajero", () => {
  const pasajero = new Pasajero();
  pasajero.nombre = "Juan";
  pasajero.apellido = "Perez";

  const vuelo1 = new Vuelo("2024-06-07", 120);
  const vuelo2 = new Vuelo("2024-06-08", 150);
  const vuelo3 = new Vuelo("2024-06-09", 90);

  pasajero.agregarVuelo(vuelo1);
  pasajero.agregarVuelo(vuelo2);
  pasajero.agregarVuelo(vuelo3);

  expect(pasajero.cantVuelos()).toBe(3);
});

it('Debe contar correctamente las veces que un pasajero visitó una ciudad', () => {
  // Crear ciudad y aeropuerto
  const ciudad1 = new Ciudad('Buenos Aires');
  const aeropuertoEzeiza = new Aeropuerto('Ezeiza');
  ciudad1.agregarAeropuerto(aeropuertoEzeiza);

  // Crear ciudad y aeropuerto de llegada
  const ciudad2 = new Ciudad('Córdoba');
  const aeropuertoCordoba = new Aeropuerto('Pajas Blancas');
  ciudad2.agregarAeropuerto(aeropuertoCordoba);

  // Crear pasajero
  const pasajero = new Pasajero('Juan', 'Perez');

  // Crear vuelos
  const vuelo1 = new Vuelo(120); // Duración aproximada de 120 minutos
  vuelo1.fechaHoraPartida = '2024-06-01';
  vuelo1.aeropuertoSalida = aeropuertoEzeiza;
  vuelo1.aeropuertoLlegada = aeropuertoCordoba;

  const vuelo2 = new Vuelo(90); // Duración aproximada de 90 minutos
  vuelo2.fechaHoraPartida = '2024-06-02';
  vuelo2.aeropuertoSalida = aeropuertoEzeiza;
  vuelo2.aeropuertoLlegada = aeropuertoCordoba;

  const vuelo3 = new Vuelo(150); // Duración aproximada de 150 minutos
  vuelo3.fechaHoraPartida = '2024-06-03';
  vuelo3.aeropuertoSalida = aeropuertoEzeiza;
  vuelo3.aeropuertoLlegada = aeropuertoCordoba;

  // Asignar vuelos al pasajero
  pasajero.agregarVuelo(vuelo1);
  pasajero.agregarVuelo(vuelo2);
  pasajero.agregarVuelo(vuelo3);

  // Verificar que la función cuenta correctamente las visitas a la ciudad1
  const vecesVisitadas = pasajero.cantVecesQueVisitaste(ciudad1);
  console.log(vecesVisitadas); // Asegúrate de que este valor sea correcto

  // Expectativa
  expect(vecesVisitadas).toBe(3); // Se espera que haya visitado 3 veces Buenos Aires
});
