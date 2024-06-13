export class Pasajero {
  nombre;
  apellido;
  vuelos = [];

  agregarVuelo(unVuelo) {
    this.vuelos.push(unVuelo);
  }

  cantVuelos() {
    return this.vuelos.length;
  }

  cantVecesQueVisitaste(unaCiudad){
    // Consideramso que un pasajer visitó una ciudad si partió de un aeropuerto que estaba en esa misma ciudad
    return this.vuelos.filter(v => unaCiudad.tenesAeropuerto(v.aeropuertoSalida)).length;
  }
}