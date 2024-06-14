export class Avion {
  cantAsientos;
  descripcion;
  aerolinea;
  vuelos = [];

  constructor(aerolinea){
    this.aerolinea = aerolinea;
  }

  agregarVuelo(unVuelo){
    this.vuelos.push(unVuelo);
  }

}