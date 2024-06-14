export class Aerolinea {
  constructor(nombre) {
    this.nombre = nombre;
    this.aviones = [];
  }

  agregarAvion(unAvion) {
    this.aviones.push(unAvion);
  }
}