export class Vuelo {
  pasajeros = [];
  tripulacion = [];
  avion;
  fechaHoraPartida;
  aeropuertoSalida;
  aeropuertoDestino;

  agregarPasajero(unPasajero){
    this.pasajeros.push(unPasajero);
  }
  
  capacidadOcupadaPorPasajero(){
    // regla de 3.
    return (this.pasajeros.length * 100) / this.avion.cantAsientos;
  }

}