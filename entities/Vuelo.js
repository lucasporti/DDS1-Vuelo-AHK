export class Vuelo {
  pasajeros = [];
  tripulacion = [];
  avion;
  fechaHoraPartida;
  fechaHoraLlegada;
  aeropuertoSalida;
  aeropuertoLlegada;
  duracionAproxEnMins;

  constructor(duracionAproxEnMins) {
    this.duracionAproxEnMins = duracionAproxEnMins;
  }

  agregarPasajero(pasajero) {
    this.pasajeros.push(pasajero);
  }

  capacidadOcupadaPorPasajeros() {
    return (this.pasajeros.length * 100) / this.avion.cantAsientos;
  }

  partisteDe(unAeropuerto) {
    return this.aeropuertoSalida == unAeropuerto;
  }

  llegasteA(unAeropuerto) {
    return this.aeropuertoLlegada == unAeropuerto;
  }

  salisteEnFecha(fecha) {
    return this.fechaHoraPartida == fecha;
  }

  llegasteEnFecha(fecha) {
    return this.fechaHoraLlegada == fecha;
  }

  cantPasajeros() {
    return this.pasajeros.length;
  }
}