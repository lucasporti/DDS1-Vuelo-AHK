export class Vuelo {
  pasajeros;
  tripulacion;
  avion;
  fechaHoraPartida;
  aeropuertoSalida;
  aeropuertoDestino;
  constructor(pasajeros, tripulacion, avion, fechaHoraPartida, aeropuertoSalida, aeropuertoDestino){
    this.pasajeros = [];
    this.tripulacion = [];
    this.avion = avion;
    this.fechaHoraPartida = fechaHoraPartida;
    this.aeropuertoSalida = aeropuertoSalida;
    this.aeropuertoDestino = aeropuertoDestino;
  }
}